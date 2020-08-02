<script type="ts">
  export let imgSrc: string;
  export let name: string;
  export let onClick: () => void;
</script>

<style>
  li {
    display: inline-block;
    margin: 5px 0;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 74px;
  }

  span {
    letter-spacing: 0.01em;
    font-size: 12px;
    width: 100%;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
  }

  img {
    width: 58px;
    height: 58px;
    border-radius: 50%;
  }
</style>

<li on:click={onClick}>
  <div>
    <img src={imgSrc} alt={name} />
    <span>{name}</span>
  </div>
</li>
