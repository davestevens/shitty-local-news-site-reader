<script type="ts">
  export let show: boolean = false;
  export let close: () => void;

  const handleKeydown = (event: KeyboardEvent): void => {
    if (event.keyCode === 27) {
      close();
    }
  };

  $: document.body.style.overflow = show ? "hidden" : "";
</script>

<style>
  .modal {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: none;
  }

  .modal.show {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal__wrapper {
    padding: 24px;
    background: white;
    border-radius: 8px;
    width: 23vw;
    max-height: 80vh;
  }

  .modal__content {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .modal__close {
    cursor: pointer;
    position: absolute;
    top: 4px;
    right: 4px;
  }
</style>


<svelte:window on:keydown={handleKeydown} />

<div class="modal" class:show on:click={close}>
  <div class="modal__wrapper" on:click|stopPropagation>
    <div class="modal__close" on:click={close}>X</div>
    <div class="modal__content">
      <slot />
    </div>
  </div>
</div>
