<template>
    <div class="service-widget">
        <v-img 
          :src="service.image"
          height="300px"
        ></v-img>
        <div class="service-info text-left pt-5 pl-5 pb-5 pr-5">
            <div class="service-widget-header mb-3">{{service.title}}</div>
            <div class="service-widget-content">
                {{service.content}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        service: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>