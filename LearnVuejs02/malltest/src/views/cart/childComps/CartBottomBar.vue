<template>
    <div class="bottom-nav">
        <div class="check-area">
            <check-button class="check-button"/>
            <span>全选</span>
        </div>
    </div>
</template>

<script>

    import CheckButton from 'components/content/checkButton/CheckButton'

    export default {
        name: 'CartButtonBar',
        
        components: { CheckButton }




    }
</script>

<style scoped>
    .bottom-nav {
        height: 40px;
        position: relative;
        background-color: red;
      
        bottom: 133px
    }

    .check-area {
        display: flex;
        align-items: center
    }

    .check-button {
        width: 20px;
        height: 20px ;
        line-height:22px
    }
</style>