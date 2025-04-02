import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref
} from "./chunk-LW4I4DCF.js";
import "./chunk-BUSYA2B4.js";

// node_modules/@theojs/lumen/types/index.ts
import { default as default2 } from "/workspaces/rootdev/node_modules/@theojs/lumen/components/DocBox.vue";
import { default as default3 } from "/workspaces/rootdev/node_modules/@theojs/lumen/components/DocLinks.vue";
import { default as default4 } from "/workspaces/rootdev/node_modules/@theojs/lumen/components/DocBoxCube.vue";
import { default as default5 } from "/workspaces/rootdev/node_modules/@theojs/lumen/components/DocVideoLink.vue";
import { default as default6 } from "/workspaces/rootdev/node_modules/@theojs/lumen/components/Announcement.vue";
import { default as default7 } from "/workspaces/rootdev/node_modules/@theojs/lumen/components/DocAsideLogo.vue";
import { default as default8 } from "/workspaces/rootdev/node_modules/@theojs/lumen/components/HomeFooter.vue";
import { default as default9 } from "/workspaces/rootdev/node_modules/@theojs/lumen/components/HomeUnderline.vue";
import { default as default10 } from "/workspaces/rootdev/node_modules/@theojs/lumen/components/DocTwikoo.vue";
import { default as default11 } from "/workspaces/rootdev/node_modules/@theojs/lumen/components/ShareButton.vue";

// node_modules/@theojs/lumen/types/utils.ts
import { useData } from "vitepress";
var usePrelink = () => {
  const { frontmatter } = useData();
  return computed(() => {
    var _a;
    return (_a = frontmatter.value.hero) == null ? void 0 : _a.prelink;
  }).value;
};
var isImage = (url) => {
  const hasValidExtension = /\.(png|jpe?g|gif|svg|webp|bmp|tif?f|tiff|ico|avif)(\?.*)?$/i.test(url);
  const isHttpOrHttps = /^https?:\/\//i.test(url);
  return hasValidExtension || isHttpOrHttps && !/\.(\w+)$/.test(url);
};
var isExternalLink = (link) => /^https?:\/\//.test(link);
async function initTwikoo(envId) {
  try {
    const twikoo = await import("./twikoo.all.min-3NFTFWKI.js");
    console.log("Twikoo 加载成功");
    if (typeof window !== "undefined") {
      await nextTick();
      const twikooElement = document.querySelector("#twikoo");
      if (twikooElement) {
        twikoo.init({
          envId,
          el: "#twikoo"
        });
      } else {
        console.error("未找到 Twikoo 元素。");
      }
    }
  } catch (error) {
    console.error("初始化 Twikoo 失败：", error);
  }
}
var useVideoToggle = () => {
  const isVideoOpen = ref(false);
  const toggleVideo = () => {
    isVideoOpen.value = !isVideoOpen.value;
  };
  return [isVideoOpen, toggleVideo];
};
var useWindowWidth = () => {
  const windowWidth = ref(null);
  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
  };
  onMounted(() => {
    if (typeof window !== "undefined") {
      windowWidth.value = window.innerWidth;
      window.addEventListener("resize", updateWindowWidth);
    }
  });
  onUnmounted(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", updateWindowWidth);
    }
  });
  return windowWidth;
};
function moveDomElements() {
  onMounted(() => {
    const targetElement = document.querySelector(".VPHero .text");
    const sourceElement = document.querySelector("#hero-text");
    if (targetElement && sourceElement) {
      targetElement.innerHTML = "";
      targetElement.appendChild(sourceElement);
    }
  });
}
var useCopyLink = () => {
  const copied = ref(false);
  const copyLink = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2e3);
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("复制链接失败，请手动复制。");
    }
  };
  return { copied, copyLink };
};

// node_modules/@theojs/lumen/types/index.ts
import "/workspaces/rootdev/node_modules/@fortawesome/fontawesome-free/css/all.min.css";
export {
  default6 as Announcement,
  default7 as DocAsideLogo,
  default2 as DocBox,
  default4 as DocBoxCube,
  default3 as DocLinks,
  default5 as DocVideoLink,
  default8 as HomeFooter,
  default9 as HomeUnderline,
  default11 as ShareButton,
  default10 as Twikoo,
  initTwikoo,
  isExternalLink,
  isImage,
  moveDomElements,
  useCopyLink,
  usePrelink,
  useVideoToggle,
  useWindowWidth
};
//# sourceMappingURL=@theojs_lumen.js.map
