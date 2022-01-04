<template>
  <div class="Toggle">
    <button>
     <i class="fa fa-moon-o"></i>
     <span>Dark Mode</span>
    </button>
  </div>
</template>

<script>
  export default{
    name: 'Toggle'
  }
</script>

<style>
  .Toggle{
    color: #197432;
  }

  button{
    background: none;
    outline: none;
    border: none;
  }

  button span{
    font-weight: 600;margin-left: 6px

  }

</style>