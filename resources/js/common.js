export default{
    data(){
        return {

        }
    },
    methods:{
        callApi(method,url,dataObj){
            return axios({
                method:method,
                url:url,
                data:dataObj
            }).then((res)=>{
                return res;
            }).catch((e)=>{
                return e.response;
            });
            
        },
        info (title,desc = '') {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        success (title,desc = '') {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        warning (title,desc = '') {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        error (title= 'Houve algo de errado tente novamente',desc = '') {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        },
        confirm (actionOk) {
            this.$Modal.confirm({
                title: 'Tag',
                content: '<p>Você tem certeza? </p>',
                onOk: actionOk,
                onCancel: () => {
                }
            });
        }
    }
}