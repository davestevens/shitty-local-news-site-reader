<script type="ts">
  import type { IStory } from "./services/getStoriesForUser";
  export let stories: IStory[] = [];
</script>

<style>
  video,
  img {
    width: 100%;
  }
</style>

<ul>
  {#each stories as story}
    <li>
      {#if story.is_video}
        <video controls poster={story.display_url}>
          <source
            src={story.video_resources[story.video_resources.length - 1].src}
            type="video/mp4" />
        </video>
      {:else}
        <img
          src={story.display_resources[story.display_resources.length - 1].src}
          alt="" />
      {/if}
    </li>
  {/each}
</ul>
