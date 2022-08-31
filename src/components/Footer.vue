<template>
    <div class="footer">
        <footer>
            <span>
                <p>Copyright &copy;2022, All rights reserved. </p>
                <p>Made by Siyolise Mekuto.</p>
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
  background-color: #141414;
  color: white;
  height: 60px;
  
}
span{
    padding-bottom: 12px;
}

.footer{
    position: fixed;
    bottom:0;
    width:100vh;
}
</style>