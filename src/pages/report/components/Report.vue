<template>
    <div>
        <f7-card>
            <f7-card-content>
                <h4>개선 전</h4>
                <img :src="report.before" alt="" width="100%">
                <h4>개선 후</h4>
                <img :src="report.after" alt="" width="100%">
            </f7-card-content>
            <f7-card-footer>
                <a href="">{{ report.user }}</a>
                <a href=""><small>{{ report.category }}</small></a>   
            </f7-card-footer>
        </f7-card>
    </div>
        
</template>

<script>
export default {
    props: ['report'],
}
</script>