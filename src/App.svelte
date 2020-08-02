<script type="ts">
  import type { IUser } from "./services/listUsersWithStories";
  import type { IStory } from "./services/getStoriesForUser";
  export let users: IUser[];
  import User from "./User.svelte";
  import Modal from "./Modal.svelte";
  import Stories from "./Stories.svelte";
  import getStoriesForUser from "./services/getStoriesForUser";

  let showModal: boolean = false;
  let stories: IStory[];

  const onUserClicked = async (userId: string) => {
    stories = await getStoriesForUser(userId);
    showModal = true;
  };

  const closeModal = (): void => {
    showModal = false;
    stories = [];
  };
</script>

<style>
  ul {
    width: 100%;
    height: 104px;
    padding: 12px;
    overflow: auto;
    white-space: nowrap;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: white;
    text-align: center;
  }
</style>

<ul>
  {#each users as user}
    <User
      imgSrc={user.profile_pic_url}
      name={user.username}
      onClick={() => onUserClicked(user.id)} />
  {/each}
</ul>
<Modal show={showModal} close={closeModal}>
  <Stories {stories} />
</Modal>
