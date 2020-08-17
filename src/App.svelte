<script type="ts">
  import { onMount } from "svelte";
  import extractContent from "./services/extractContent";
  import Modal from "./Modal.svelte";

  let showModal: boolean = false;
  let content: HTMLElement;

  onMount(() => {
    content.innerHTML = extractContent().innerHTML;
    showModal = true;
  });

  const closeModal = (): void => {
    showModal = false;
  };
</script>

<Modal show={showModal} close={closeModal}>
  <div class="article-content" bind:this={content} />
</Modal>
