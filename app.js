const STORAGE_KEY = "essay-knowledge-base:v1";

function createId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `note-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

const seedNotes = [
  {
    id: createId(),
    title: "如何保存一个想法",
    content:
      "想法刚出现时通常很粗糙，先记录触发它的场景，再写下判断、疑问和可以验证的下一步。\n\n- 场景：在哪里读到或想到\n- 判断：我暂时相信什么\n- 疑问：哪里还不确定\n- 下一步：能否变成行动",
    tags: ["方法", "写作"],
    source: "初始样例",
    pinned: true,
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: createId(),
    title: "知识库不是仓库",
    content:
      "只收集材料会让系统变沉。每条随笔都应该尽量留下自己的判断，哪怕只有一句。\n\n> 有判断，才有复用价值。",
    tags: ["知识管理"],
    source: "阅读笔记",
    pinned: false,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 7200000).toISOString()
  }
];

let notes = loadNotes();
let selectedId = notes[0]?.id ?? null;
let activeTag = "";
let activeView = "all";
let activeMode = "write";

const els = {
  statsText: document.querySelector("#statsText"),
  newNoteBtn: document.querySelector("#newNoteBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  importInput: document.querySelector("#importInput"),
  searchInput: document.querySelector("#searchInput"),
  tagFilters: document.querySelector("#tagFilters"),
  sortSelect: document.querySelector("#sortSelect"),
  noteList: document.querySelector("#noteList"),
  listTitle: document.querySelector("#listTitle"),
  resultText: document.querySelector("#resultText"),
  titleInput: document.querySelector("#titleInput"),
  tagsInput: document.querySelector("#tagsInput"),
  sourceInput: document.querySelector("#sourceInput"),
  contentInput: document.querySelector("#contentInput"),
  previewPane: document.querySelector("#previewPane"),
  pinBtn: document.querySelector("#pinBtn"),
  deleteBtn: document.querySelector("#deleteBtn"),
  wordCount: document.querySelector("#wordCount"),
  updatedText: document.querySelector("#updatedText"),
  noteItemTemplate: document.querySelector("#noteItemTemplate")
};

function loadNotes() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedNotes));
    return seedNotes;
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : seedNotes;
  } catch {
    return seedNotes;
  }
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function selectedNote() {
  return notes.find((note) => note.id === selectedId) ?? notes[0] ?? null;
}

function normalizeTags(value) {
  return value
    .split(/[,，]/)
    .map((tag) => tag.trim())
    .filter(Boolean)
    .filter((tag, index, arr) => arr.indexOf(tag) === index);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function allTags() {
  return [...new Set(notes.flatMap((note) => note.tags))].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function filteredNotes() {
  const query = els.searchInput.value.trim().toLowerCase();
  const sortBy = els.sortSelect.value;

  return notes
    .filter((note) => {
      const matchesQuery =
        !query ||
        [note.title, note.content, note.source, note.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesTag = !activeTag || note.tags.includes(activeTag);
      const matchesView =
        activeView === "all" ||
        (activeView === "pinned" && note.pinned) ||
        (activeView === "recent" && Date.now() - new Date(note.updatedAt).getTime() < 86400000 * 7);

      return matchesQuery && matchesTag && matchesView;
    })
    .sort((a, b) => {
      if (a.pinned !== b.pinned) return Number(b.pinned) - Number(a.pinned);
      if (sortBy === "title") return a.title.localeCompare(b.title, "zh-CN");
      const key = sortBy === "created" ? "createdAt" : "updatedAt";
      return new Date(b[key]).getTime() - new Date(a[key]).getTime();
    });
}

function renderTags() {
  els.tagFilters.innerHTML = "";
  const tags = allTags();

  if (!tags.length) {
    els.tagFilters.innerHTML = '<div class="empty-state">暂无标签</div>';
    return;
  }

  tags.forEach((tag) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tag-chip${activeTag === tag ? " active" : ""}`;
    button.textContent = tag;
    button.addEventListener("click", () => {
      activeTag = activeTag === tag ? "" : tag;
      render();
    });
    els.tagFilters.append(button);
  });
}

function renderList() {
  const visibleNotes = filteredNotes();
  els.noteList.innerHTML = "";
  els.resultText.textContent = `${visibleNotes.length} 条结果`;
  els.listTitle.textContent = activeTag || (activeView === "pinned" ? "置顶随笔" : activeView === "recent" ? "最近更新" : "全部随笔");

  if (!visibleNotes.length) {
    els.noteList.innerHTML = '<div class="empty-state">没有匹配的随笔</div>';
    return;
  }

  visibleNotes.forEach((note) => {
    const item = els.noteItemTemplate.content.firstElementChild.cloneNode(true);
    item.classList.toggle("active", note.id === selectedId);
    item.classList.toggle("pinned", note.pinned);
    item.querySelector("h3").textContent = note.title || "未命名随笔";
    item.querySelector(".excerpt").textContent = note.content.replace(/\s+/g, " ").trim() || "空白内容";
    item.querySelector(".date").textContent = formatDate(note.updatedAt);

    const miniTags = item.querySelector(".mini-tags");
    note.tags.slice(0, 3).forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.className = "mini-tag";
      tagEl.textContent = tag;
      miniTags.append(tagEl);
    });

    item.addEventListener("click", () => {
      selectedId = note.id;
      render();
    });
    els.noteList.append(item);
  });
}

function renderEditor() {
  const note = selectedNote();
  const disabled = !note;

  [els.titleInput, els.tagsInput, els.sourceInput, els.contentInput, els.pinBtn, els.deleteBtn].forEach((el) => {
    el.disabled = disabled;
  });

  if (!note) {
    els.titleInput.value = "";
    els.tagsInput.value = "";
    els.sourceInput.value = "";
    els.contentInput.value = "";
    els.previewPane.innerHTML = "";
    els.wordCount.textContent = "0";
    els.updatedText.textContent = "未保存";
    return;
  }

  els.titleInput.value = note.title;
  els.tagsInput.value = note.tags.join("，");
  els.sourceInput.value = note.source;
  els.contentInput.value = note.content;
  els.pinBtn.textContent = note.pinned ? "★" : "☆";
  els.wordCount.textContent = String(note.content.replace(/\s/g, "").length);
  els.updatedText.textContent = `更新于 ${formatDate(note.updatedAt)}`;
  renderPreview(note);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

function renderPreview(note) {
  const blocks = note.content.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  els.previewPane.innerHTML =
    blocks
      .map((block) => {
        if (block.startsWith("### ")) return `<h3>${inlineMarkdown(block.slice(4))}</h3>`;
        if (block.startsWith("## ")) return `<h2>${inlineMarkdown(block.slice(3))}</h2>`;
        if (block.startsWith("# ")) return `<h1>${inlineMarkdown(block.slice(2))}</h1>`;
        if (block.startsWith("> ")) return `<blockquote>${inlineMarkdown(block.slice(2))}</blockquote>`;
        if (block.startsWith("- ")) {
          const items = block
            .split("\n")
            .filter((line) => line.startsWith("- "))
            .map((line) => `<li>${inlineMarkdown(line.slice(2))}</li>`)
            .join("");
          return `<ul>${items}</ul>`;
        }
        return `<p>${inlineMarkdown(block).replace(/\n/g, "<br>")}</p>`;
      })
      .join("") || "<p>空白内容</p>";
}

function updateSelected(patch) {
  const note = selectedNote();
  if (!note) return;

  Object.assign(note, patch, { updatedAt: new Date().toISOString() });
  saveNotes();
  renderTags();
  renderList();
  renderEditorMetrics();
}

function renderEditorMetrics() {
  const note = selectedNote();
  if (!note) return;
  els.pinBtn.textContent = note.pinned ? "★" : "☆";
  els.wordCount.textContent = String(note.content.replace(/\s/g, "").length);
  els.updatedText.textContent = `更新于 ${formatDate(note.updatedAt)}`;
  renderPreview(note);
}

function createNote() {
  const now = new Date().toISOString();
  const note = {
    id: createId(),
    title: "未命名随笔",
    content: "",
    tags: [],
    source: "",
    pinned: false,
    createdAt: now,
    updatedAt: now
  };
  notes.unshift(note);
  selectedId = note.id;
  saveNotes();
  render();
  els.titleInput.focus();
  els.titleInput.select();
}

function deleteSelected() {
  const note = selectedNote();
  if (!note) return;
  const confirmed = window.confirm(`删除《${note.title || "未命名随笔"}》？`);
  if (!confirmed) return;

  notes = notes.filter((item) => item.id !== note.id);
  selectedId = notes[0]?.id ?? null;
  saveNotes();
  render();
}

function exportNotes() {
  const blob = new Blob([JSON.stringify(notes, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `essay-knowledge-base-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importNotes(file) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      if (!Array.isArray(parsed)) throw new Error("Invalid format");
      notes = parsed.map((note) => ({
        id: note.id || createId(),
        title: note.title || "未命名随笔",
        content: note.content || "",
        tags: Array.isArray(note.tags) ? note.tags : [],
        source: note.source || "",
        pinned: Boolean(note.pinned),
        createdAt: note.createdAt || new Date().toISOString(),
        updatedAt: note.updatedAt || new Date().toISOString()
      }));
      selectedId = notes[0]?.id ?? null;
      saveNotes();
      render();
    } catch {
      window.alert("导入失败：请选择随笔知识库 JSON 文件。");
    }
  });
  reader.readAsText(file);
}

function render() {
  els.statsText.textContent = `${notes.length} 篇随笔`;
  renderTags();
  renderList();
  renderEditor();
}

els.newNoteBtn.addEventListener("click", createNote);
els.deleteBtn.addEventListener("click", deleteSelected);
els.exportBtn.addEventListener("click", exportNotes);
els.importInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (file) importNotes(file);
  event.target.value = "";
});

els.searchInput.addEventListener("input", renderList);
els.sortSelect.addEventListener("change", renderList);

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((el) => el.classList.remove("active"));
    button.classList.add("active");
    activeView = button.dataset.view;
    renderList();
  });
});

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((el) => el.classList.remove("active"));
    button.classList.add("active");
    activeMode = button.dataset.mode;
    els.contentInput.hidden = activeMode !== "write";
    els.previewPane.hidden = activeMode !== "preview";
  });
});

els.titleInput.addEventListener("input", () => updateSelected({ title: els.titleInput.value }));
els.tagsInput.addEventListener("change", () => updateSelected({ tags: normalizeTags(els.tagsInput.value) }));
els.sourceInput.addEventListener("input", () => updateSelected({ source: els.sourceInput.value }));
els.contentInput.addEventListener("input", () => updateSelected({ content: els.contentInput.value }));
els.pinBtn.addEventListener("click", () => {
  const note = selectedNote();
  if (note) updateSelected({ pinned: !note.pinned });
});

render();
