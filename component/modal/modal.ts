// component/modal/modal.js
import { menu } from '../../service/menu/menu.service' ;
import { $Event } from '../../util/Event/Event' ;

//@ts-ignore
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        show :  false
    },
    /**
     * 组件的方法列表
     */
    methods: {

    },
    created(){
        menu() ;
        $Event.$on("load" , ( data : any ) => {
            setTimeout( () => {
                this.setData({
                    show : data
                });
            } , 1000);
        });
    }
})