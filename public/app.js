const translations = {
  en: {
    metaTitle: "EverLog — Your life, indexed",
    metaDescription: "EverLog automatically turns everyday moments into searchable private memory with on-device transcription and temporary audio by default.",
    nav: {
      how: "How it works",
      features: "Features",
      privacy: "Privacy",
      roadmap: "Roadmap",
      notes: "Notes",
      cta: "Read notes"
    },
    hero: {
      status: "Coming soon · early prototype",
      title: "Your life, indexed.",
      subtitle: "EverLog automatically turns everyday moments into searchable private memory — without adding another habit to manage.",
      primaryCta: "Read the concept",
      secondaryCta: "See how it works",
      trust: {
        one: "Local-first",
        two: "On-device transcription",
        three: "Temporary audio by default"
      }
    },
    visual: {
      today: "Today",
      local: "Local",
      fragmentLabel: "Voice fragment",
      fragment: "“I keep returning to the same decision. Maybe the real signal is what I keep avoiding.”",
      journalTitle: "Journal drafted",
      journalBody: "A quiet reflection about choosing focus over urgency.",
      taskTitle: "Task detected",
      taskBody: "Send the project note before Friday.",
      memoryTitle: "Memory linked",
      memoryBody: "Related to April's career decision thread.",
      insightLabel: "Reflection",
      insightBody: "You sound most clear after walking outside.",
      privacy: "Private by default"
    },
    positioning: {
      label: "Positioning",
      title: "Not another AI assistant. A memory layer for your own life.",
      body: "Most tools demand a new habit. EverLog works in the background, capturing everyday context and turning it into useful memory when you need it.",
      point: {
        one: "From passing moments to searchable context",
        two: "From near-zero effort to lasting recall",
        three: "From local transcription to private memory"
      }
    },
    how: {
      label: "How it works",
      title: "Start once. Let it work.",
      subtitle: "Turn it on, keep living, and let EverLog build a private memory layer from your day.",
      step: {
        one: {
          title: "Capture automatically",
          body: "Keep everyday moments available without manually starting a note, meeting app, or journaling habit."
        },
        two: {
          title: "Transcribe on device",
          body: "On-device transcription and silence-aware boundaries turn audio into clean text while keeping raw audio temporary by default."
        },
        three: {
          title: "Organize memory",
          body: "Private transcripts become journals, timelines, decisions, tasks, and searchable context you can return to later."
        }
      }
    },
    features: {
      label: "Key features",
      title: "An automatic memory system with almost no daily overhead.",
      offline: {
        title: "On-device transcription",
        body: "Designed around on-device transcription where possible, so private speech can become useful text without defaulting to the cloud."
      },
      journal: {
        title: "Automatic journal",
        body: "Your day can become a readable journal automatically, preserving tone, decisions, and what actually changed."
      },
      timeline: {
        title: "Memory timeline",
        body: "Threads, people, places, moods, and projects become easier to revisit across weeks and years."
      },
      reflection: {
        title: "Reflective prompts",
        body: "Focused summaries and questions help you spot recurring patterns without demanding constant check-ins."
      },
      tasks: {
        title: "Tasks and decisions",
        body: "Extract possible follow-ups, open decisions, and commitments from the natural flow of your own speech."
      },
      tech: {
        title: "Signal-aware capture",
        body: "Overlap-aware transcription, smart segmentation, and VAD/silence-aware boundaries help turn messy audio into reliable searchable memory."
      }
    },
    privacy: {
      label: "Privacy-first",
      title: "Your life is not training data.",
      body: "EverLog is built around a local-first model: transcription can happen on device, raw audio should be temporary by default, and cloud features should be explicit choices rather than hidden assumptions.",
      point: {
        one: "Local-first storage for sensitive transcripts",
        two: "Clear controls for audio retention, export, deletion, and sync",
        three: "On-device transcription where possible, with transparent fallback options"
      },
      stack: {
        one: {
          label: "Device",
          title: "Temporary audio buffer"
        },
        two: {
          label: "Offline",
          title: "On-device transcription engine"
        },
        three: {
          label: "Optional",
          title: "User-controlled memory sync later"
        }
      }
    },
    useCases: {
      label: "Use cases",
      title: "For the moments that are too small for documents and too important to lose.",
      one: {
        title: "Walking thoughts",
        body: "Capture ideas while moving, then revisit the strongest themes later."
      },
      two: {
        title: "Decision trails",
        body: "Remember why you chose something, not just what you chose."
      },
      three: {
        title: "Personal growth",
        body: "Notice recurring moods, habits, doubts, and sources of clarity over time."
      },
      four: {
        title: "Creative notebook",
        body: "Turn scattered voice notes into connected material for writing, work, and projects."
      }
    },
    roadmap: {
      label: "Roadmap",
      title: "Early prototype now. A deeper companion next.",
      subtitle: "EverLog is still forming. The goal is a trustworthy personal memory system before broad launch.",
      one: {
        phase: "Prototype",
        title: "Local capture and transcription",
        body: "Polishing the foundation for local-first audio capture and on-device transcription."
      },
      two: {
        phase: "Next",
        title: "Journal and memory intelligence",
        body: "Better conversion from raw fragments into daily journals, timelines, and decision threads."
      },
      three: {
        phase: "Later",
        title: "Private companion layer",
        body: "A context-aware memory layer grounded in your own life data, not another tool demanding attention."
      }
    },
    cta: {
      label: "Product notes",
      title: "The thinking behind EverLog.",
      body: "EverLog is actively being shaped. These notes keep the homepage clean while making the product principles, privacy model, and use cases easier to explore.",
      card: {
        one: {
          title: "Why EverLog exists",
          body: "A memory layer that works without adding another habit."
        },
        two: {
          title: "Temporary audio, durable memory",
          body: "Why on-device transcription and audio retention matter."
        },
        three: {
          title: "Without another habit",
          body: "The real cost of productivity tools is attention."
        },
        read: "Read article →"
      }
    },
    footer: {
      copy: "Searchable private memory · coming soon"
    }
  },
  zh: {
    metaTitle: "EverLog — 把生活变成可搜索记忆",
    metaDescription: "EverLog 自动把日常片段转化为可搜索的私人记忆，并默认强调端侧转写与临时音频。",
    nav: {
      how: "工作方式",
      features: "核心功能",
      privacy: "隐私",
      roadmap: "路线图",
      notes: "产品笔记",
      cta: "阅读笔记"
    },
    hero: {
      status: "即将推出 · 早期原型",
      title: "把你的生活，变成可搜索的记忆。",
      subtitle: "EverLog 自动把每天的片段转化为可搜索的私人记忆，而且不要求你再养成一个新习惯。",
      primaryCta: "阅读理念",
      secondaryCta: "了解工作方式",
      trust: {
        one: "Local-first",
        two: "端侧转写",
        three: "音频默认临时保留"
      }
    },
    visual: {
      today: "今天",
      local: "本地",
      fragmentLabel: "声音片段",
      fragment: "“我一直回到同一个决定。也许真正的信号，是我一直在回避的东西。”",
      journalTitle: "日记已生成",
      journalBody: "一段关于选择专注而不是紧急感的安静反思。",
      taskTitle: "识别到任务",
      taskBody: "周五前发送项目备注。",
      memoryTitle: "关联记忆",
      memoryBody: "与四月的职业选择线索相关。",
      insightLabel: "反思",
      insightBody: "你在户外散步后表达得最清楚。",
      privacy: "默认私密"
    },
    positioning: {
      label: "定位",
      title: "不是又一个 AI 助手，而是属于你自己的记忆层。",
      body: "多数工具都要求你养成新习惯。EverLog 在后台工作，捕捉每天的上下文，并在你需要时把它变成有用的记忆。",
      point: {
        one: "从转瞬即逝到可搜索上下文",
        two: "从几乎零成本到长期可回看",
        three: "从端侧转写到私人记忆"
      }
    },
    how: {
      label: "工作方式",
      title: "打开一次，让它自己工作。",
      subtitle: "打开 EverLog，继续生活，让它从每天的片段中建立你的私人记忆层。",
      step: {
        one: {
          title: "自动捕捉",
          body: "不用手动打开笔记、会议工具或日记习惯，也能让日常片段在需要时找得回来。"
        },
        two: {
          title: "在设备上转写",
          body: "端侧转写与静音边界处理，把音频转成清晰文本，同时原始音频默认临时保留。"
        },
        three: {
          title: "组织个人记忆",
          body: "私人转写会变成日记、时间线、决定、任务与可搜索上下文，之后随时可以回看。"
        }
      }
    },
    features: {
      label: "核心功能",
      title: "一个几乎不增加日常负担的自动记忆系统。",
      offline: {
        title: "端侧转写",
        body: "尽可能围绕端侧转写设计，让私人语音先在设备上变成有用文本，而不是默认进入云端。"
      },
      journal: {
        title: "自动日记",
        body: "每天的片段可以自动变成可读日记，保留语气、决定，以及真正发生的变化。"
      },
      timeline: {
        title: "记忆时间线",
        body: "线索、人物、地点、情绪与项目，会在几周甚至几年后更容易被重新看见。"
      },
      reflection: {
        title: "反思提示",
        body: "聚焦的总结与问题帮助你看见反复出现的模式，而不是不断要求你回复和确认。"
      },
      tasks: {
        title: "任务与决定",
        body: "从自然说话的过程中提取可能的后续行动、悬而未决的决定，以及承诺事项。"
      },
      tech: {
        title: "感知信号的捕捉",
        body: "重叠感知转写、智能分段，以及 VAD/静音边界，帮助把混乱音频变成可靠的可搜索记忆。"
      }
    },
    privacy: {
      label: "隐私优先",
      title: "你的生活不是训练数据。",
      body: "EverLog 围绕 local-first 模型构建：转写可以在设备上完成，原始音频默认应当临时保留，云端能力必须是明确选择，而不是隐藏假设。",
      point: {
        one: "敏感转写文本优先本地保存",
        two: "清晰控制音频保留、导出、删除与同步",
        three: "尽可能使用端侧转写，并透明说明备选方案"
      },
      stack: {
        one: {
          label: "设备",
          title: "临时音频缓冲区"
        },
        two: {
          label: "离线",
          title: "端侧转写引擎"
        },
        three: {
          label: "可选",
          title: "由用户控制的记忆同步"
        }
      }
    },
    useCases: {
      label: "使用场景",
      title: "那些小到不值得写成文档、却重要到不该丢失的瞬间。",
      one: {
        title: "散步时的想法",
        body: "在移动中捕捉灵感，之后再回看最强的主题。"
      },
      two: {
        title: "决定的轨迹",
        body: "记住你为什么做出选择，而不只是记住选了什么。"
      },
      three: {
        title: "个人成长",
        body: "长期看见反复出现的情绪、习惯、怀疑，以及清晰感的来源。"
      },
      four: {
        title: "创作笔记本",
        body: "把零散语音笔记整理成写作、工作与项目可用的连接素材。"
      }
    },
    roadmap: {
      label: "路线图",
      title: "现在是早期原型，下一步是更深的个人伙伴。",
      subtitle: "EverLog 仍在形成中。目标是在广泛发布前，先做出一个值得信任的个人记忆系统。",
      one: {
        phase: "原型",
        title: "本地捕捉与转写",
        body: "打磨从 local-first 音频捕捉与端侧转写能力中延展出来的基础。"
      },
      two: {
        phase: "下一步",
        title: "日记与记忆智能",
        body: "更好地把原始片段转化为每日记录、时间线与决定线索。"
      },
      three: {
        phase: "之后",
        title: "私人伙伴层",
        body: "一个更安静、更理解上下文的反思体验，并始终扎根于你自己的生活数据。"
      }
    },
    cta: {
      label: "产品笔记",
      title: "EverLog 背后的产品思考。",
      body: "EverLog 还在主动形成中。这些笔记让首页保持干净，同时把产品原则、隐私模型和使用场景沉淀下来。",
      card: {
        one: {
          title: "EverLog 为什么存在",
          body: "一个不要求你养成新习惯的记忆层。"
        },
        two: {
          title: "临时音频，长期记忆",
          body: "为什么端侧转写和音频保留策略很重要。"
        },
        three: {
          title: "不要再增加一个习惯",
          body: "效率工具真正的成本是注意力。"
        },
        read: "阅读文章 →"
      }
    },
    footer: {
      copy: "可搜索的私人记忆 · 即将推出"
    }
  }
};

const storageKey = "everlog-language";
const supportedLanguages = ["en", "zh"];

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), source);
}

function detectInitialLanguage() {
  const savedLanguage = localStorage.getItem(storageKey);
  if (supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }
  const browserLanguage = navigator.language || navigator.userLanguage || "en";
  return browserLanguage.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function applyLanguage(language) {
  const activeLanguage = supportedLanguages.includes(language) ? language : "en";
  const dictionary = translations[activeLanguage];

  document.documentElement.lang = activeLanguage === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.locale = activeLanguage;
  document.title = dictionary.metaTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getNestedValue(dictionary, element.dataset.i18n);
    if (value !== undefined) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getNestedValue(dictionary, element.dataset.i18nPlaceholder);
    if (value !== undefined) {
      element.setAttribute("placeholder", value);
    }
  });

  const toggle = document.querySelector("[data-lang-toggle]");
  if (toggle) {
    toggle.setAttribute("aria-label", activeLanguage === "zh" ? "切换语言" : "Switch language");
  }

  localStorage.setItem(storageKey, activeLanguage);
  document.documentElement.classList.add("ready");
}

function setupLanguageToggle() {
  const toggle = document.querySelector("[data-lang-toggle]");
  if (!toggle) {
    return;
  }
  toggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.dataset.locale === "zh" ? "en" : "zh";
    applyLanguage(nextLanguage);
  });
}

function setupRevealAnimations() {
  const elements = Array.from(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });
  elements.forEach((element) => observer.observe(element));
}

function init() {
  applyLanguage(detectInitialLanguage());
  setupLanguageToggle();
  setupRevealAnimations();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
