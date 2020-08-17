<script type="ts">
  import Modal from "./Modal.svelte";

  let showModal: boolean = false;

  const closeModal = (): void => {
    showModal = false;
  };
</script>

<Modal show={showModal} close={closeModal} />
