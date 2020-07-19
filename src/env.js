let baseURL;
//在package中 "serve": "vue-cli-service serve --mode",--是注入的参数，把环境变量传给我们项目，这样我们项目才能知道当前位于哪个环境

 switch(process.env.NODE_ENV){//nodejs中，process.env.NODE_ENV获取当前node进程中的环境变量，最终会写入到nodejs中
   case "devlopment":
      baseURL='http://dev-mall-pre.springboot.cn/api';
      break;
      case "test":
        baseURL='http://test-mall-pre.springboot.cn/api';
         break;
     case "prod":
        baseURL='http://mall-pre.springboot.cn/api';
         break;
    default:
      baseURL='http://mall-pre.springboot.cn/api';
      break;
   
    
 }


//模块导出
export default {
  baseURL
}