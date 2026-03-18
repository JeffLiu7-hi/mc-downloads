(function () {
  const translations = {
    en: {
      eyebrow: 'Minecraft Downloads',
      title: 'All Your Favorite Launchers, One Click Away',
      tagline: 'Choose an official or community launcher and start exploring blocky worlds in minutes.',
      languageLabel: 'Language',
      official: 'Official Launcher',
      officialNote: 'Best for Java & Bedrock',
      hmcl: 'Hello Minecraft! Launcher',
      hmclNote: 'Lightweight & flexible',
      prism: 'Prism Launcher',
      prismNote: 'Community favorite fork',
      atlauncher: 'ATLauncher',
      atlauncherNote: 'Great for modpacks',
      multimc: 'MultiMC',
      multimcNote: 'Profiles made simple',
      modrinth: 'Modrinth Launcher',
      modrinthNote: 'Browse mods instantly',
      pcl2: 'Plain Craft Launcher2',
      pcl2Note: 'Windows only',
      disclaimer: 'All links lead to their respective official project pages.',
    },
    zh: {
      eyebrow: '我的世界下载',
      title: '喜爱的启动器，一键即达',
      tagline: '选择官方或社区启动器，几分钟内即可开启像素冒险。',
      languageLabel: '语言',
      official: '官方启动器',
      officialNote: '适用于 Java 和基岩版',
      hmcl: 'Hello Minecraft! 启动器',
      hmclNote: '轻量而灵活',
      prism: 'Prism 启动器',
      prismNote: '社区人气分支',
      atlauncher: 'ATLauncher',
      atlauncherNote: '模组包首选',
      multimc: 'MultiMC',
      multimcNote: '配置管理更简单',
      modrinth: 'Modrinth 启动器',
      modrinthNote: '立即浏览模组',
      pcl2: 'Plain Craft Launcher2',
      pcl2Note: '仅限 Windows',
      disclaimer: '所有链接均指向各自的官方项目页面。',
    },
  };

  const storageKey = 'mc-downloads-language';
  const translatorButtons = Array.from(document.querySelectorAll('.translator__btn'));
  const translatableElements = Array.from(document.querySelectorAll('[data-key]'));
  const supportedLanguages = Object.keys(translations);

  const detectInitialLanguage = () => {
    const stored = localStorage.getItem(storageKey);
    if (supportedLanguages.includes(stored)) {
      return stored;
    }
    return 'en';
  };

  const setActiveButton = (lang) => {
    translatorButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  };

  const applyTranslations = (lang) => {
    const languagePack = translations[lang];
    if (!languagePack) return;

    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';

    translatableElements.forEach((node) => {
      const key = node.dataset.key;
      const nextText = languagePack[key];
      if (typeof nextText === 'string') {
        node.textContent = nextText;
      }
    });
  };

  const switchLanguage = (lang) => {
    if (!supportedLanguages.includes(lang)) return;
    applyTranslations(lang);
    setActiveButton(lang);
    try {
      localStorage.setItem(storageKey, lang);
    } catch (error) {
      // Ignore storage errors (e.g., private browsing)
    }
  };

  translatorButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
    });
  });

  switchLanguage(detectInitialLanguage());
})();
