<template>
    <f7-page name="reportlist">
        <f7-navbar sliding>
            <f7-nav-left>
                <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
            </f7-nav-left>
            <f7-nav-title>
                청소/정리정돈/개선
            </f7-nav-title>
        </f7-navbar>
        
        <f7-block-title>청소, 정리/정돈, 개선 사항을 입력하세요.</f7-block-title>
        
        <f7-list form>
            <f7-list-item>
                <f7-label>Category</f7-label>
                <f7-input type="select" :value="cat_value" 
                    @input="cat_value = $event.target.value">
                    <option
                        v-for="category in categories" :value="category.name"
                            >{{ category.name }}</option>
                </f7-input>
                
            </f7-list-item>
            <f7-list-item>
                <f7-label>Before</f7-label>
                <f7-input type="file" 
                    @change="filesChange($event)" accept="image/*"
                    placeholder="Before" class="preview">
                </f7-input>
                
            </f7-list-item>
            <f7-list-item>
                <f7-button @click="submit" block outline round raised> 입력 </f7-button>
            </f7-list-item>
            <f7-list-item>
                <f7-card>
                    <f7-card-content>
                        <img v-if="url" :src="url" alt="" width="100%">
                    </f7-card-content>
                </f7-card>
            </f7-list-item>
        </f7-list>

        <!-- TOOLBAR -->
         <f7-toolbar bottom-md>
           <f7-link href="/">
             <f7-icon f7="home"></f7-icon>
           </f7-link>
           <f7-link href="/services/">
             <f7-icon f7="search"></f7-icon>
           </f7-link>
           <f7-link href="/report/list/">
             <f7-icon f7="calendar"></f7-icon>
           </f7-link>
           <f7-link>
             <f7-icon f7="camera"></f7-icon>
           </f7-link>
         </f7-toolbar> 
    </f7-page>
</template>
            

<script>
export default {
    data() {
        return {
            cat_value: "청소 필요",
            selectedFile: null,
            categories: [],
            url: null,
        }
    },
    methods: {
        submit(){
            let formData = new FormData()
            formData.append('category', this.cat_value)
            formData.append('before', this.selectedFile)

            let key = localStorage.getItem('token')

            const baseUrl = 'http://localhost:8000/api/reports/'
            this.$http.post(baseUrl, formData, {
                headers : {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Token ${key}`
                }
            })
            .then(response => {
                console.log(response)
                this.$f7.views.main.router.back();
            }, error => console.log(error))
        },
        filesChange(event){
            var reader = new FileReader();

            this.selectedFile = event.target.files[0]
            this.url = URL.createObjectURL(this.selectedFile)
        }
    },
    mounted(){
        this.$http.get('http://localhost:8000/api/categories/')
            .then(response => {
                console.log(response.data.results)
                this.categories = response.data.results
            }, error => console.log(error))

    }
}
</script>

<style scoped>

input[type=file]{
    padding:30px;
    background-color: #2d2d2d;
}    
</style>