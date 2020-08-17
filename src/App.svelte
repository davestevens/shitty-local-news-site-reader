<script type="ts">
  import { onMount } from "svelte";
  import extractContent from "./services/extractContent";
  import Modal from "./Modal.svelte";

  let showModal: boolean = false;
  let content: HTMLIFrameElement;

  onMount(() => {
    const article = extractContent();
    if (article) {
      content.src = `data:text/html,<meta charset="utf-8">${encodeURIComponent(
        article.innerHTML
      )}`;
      showModal = true;
    }
  });

  const closeModal = (): void => {
    showModal = false;
  };
</script>

<style>
  .article-frame {
    width: 100%;
    height: 100%;
  }
</style>

<Modal show={showModal} close={closeModal}>
  <iframe
    src=""
    bind:this={content}
    title="Article Content"
    class="article-frame" />
</Modal>
