<template>
    <div>
        <footer>
            <span>
                <p>Copyright &copy;2022, All rights reserved. </p>
                Made by Siyolise Mekuto.
            </span>
        </footer>
    </div>
</template>

<script>
export default{
    name:"Footer"
}
</script>

<style scoped>
footer {
  text-align: center;
  /* padding-bottom: 5px; */
  background-color: #141414;
  color: white;
  display: block;
  height: 70px;
  display:flex;  
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
}
span{
    padding-bottom: 12px;
}
a{
  text-decoration: none;
  color: white;
}
a:hover{
    color: #C7A17F;
}
</style>