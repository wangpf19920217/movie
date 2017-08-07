<template>
    <div>
    	<ul id="example-1">
		  <li v-for="item in 25">
		    {{ msg }}
		  </li>
		</ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    body{
    	background: wheat;
    }
 </style>