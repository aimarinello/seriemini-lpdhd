<script>
  import MainMenu from './MainMenu.svelte';
  import serieConfig from '$config/serie.config.js';
  import { base } from '$app/paths';

  const backgroundImage = serieConfig.banner !== undefined ? (/(^http)/.test(serieConfig.banner) ? serieConfig.banner : `${base}/${serieConfig.banner}`) : undefined;
</script>

<header class="main-header"  style={`background-image: ${ backgroundImage !== undefined ? `url(${backgroundImage})` : "none"};` }>
  
  <div class="logos-container">  <!-- Espacio para logos improtados desde serieConfig.logos -->
    {#if serieConfig.logos !== undefined}
      {#each serieConfig.logos as {img, link}}
        <div class="logo">
          <a href={link} target="_blank">
            <img src={/(^http)/.test(img) ? img : `${base}/${img}`} alt="logo"/>
          </a>
        </div>
      {/each}
    {/if}
  </div>
   
  <div>
    <h1 class="main-title" id="main-title" ><a href={base}>{serieConfig.title}</a></h1>
    <span class="main-subtitle" >{serieConfig.subtitle}</span>
  </div>
  
  

</header>
<MainMenu />
<style>
  a {
    text-decoration: none;
    color: rgb(255, 255, 253);
    
  }
  
  .main-subtitle {
    color: rgb(255, 255, 255); 
   
  }

  .main-title {
    max-width: 600px;
    font-size: 3em;
    padding: 0;
    margin: 0;
   
  }

  .main-header {
    display: flex;
    padding: 1em;
    justify-content: space-around;
    background: rgb(73, 71, 190);
    align-items: center;
    border: solid 1px var(--accent1);
    min-height: 200px;
    flex-direction: row;
  }
  /* Control del estilo del logo superior*/
  .logos-container {
    display: flex;
    gap: 0.5em;
  }

  .logo {
    max-width: 300px;
  }

  .logo img {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    .main-header {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
</style>