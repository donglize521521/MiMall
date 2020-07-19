
// /**
//  * Storage封装(es6规范)
//  */
// const STORAGE_KEY = 'mall';
// export default{
//   //存储值(可以是简单的，也可以是复杂的，不限制，可以是数字，字符串，布尔值，JSON对象)
//   setItem(key,value,module_name){
//     if(module_name){
//       let val = this.getItem(module_name);
//       val[key] = value;
//       this.setItem(module_name,val);
//     }else{
//       let val = this.getStorge();
//       val[key] = value;
//       window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
//     }
     
//   },
//   //获取某一个模块下面的属性user下面的userName
//   getItem(key,module_name){
//     if(module_name){
//       let val = this.getItem(module_name);
//       if(val) return val[key];
//     }
//    return this.getStorge()[key];
//   },
//   getStorge(){
//     //1，一开始可能为空，空的话给它字符串的object
//     //2.转化为JSON操作会更加简单，所有的读写设置都是通过JSON设置的，这样会把更加复杂的对象处理存储到我们storage中
//      return (JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}'));
//   },
//   clear(key,module_name){
//   let val = this.getStorge();
//   if(module_name){
//     delete val[module_name][key];
//   }else{
//     delete val[key];
//   }
//   window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
//   }
// }
/**
 * Storage封装(es6规范)
 */
const  STORAGE_KEY = 'mall';
export default{
  // 存储值(可以是简单的，也可以是复杂的，不限制，可以是数字，字符串，布尔值，JSON对象)
  setItem(key,value,module_name){
    if (module_name){
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    }else{
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取某一个模块下面的属性user下面的userName
  getItem(key,module_name){
    if (module_name){
      let val = this.getItem(module_name);
      if(val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage(){
    //1，一开始可能为空，空的话给它字符串的object
    //2.转化为JSON操作会更加简单，所有的读写设置都是通过JSON设置的，这样会把更加复杂的对象处理存储到我们storage中
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear(key, module_name){
    let val = this.getStorage();
    if (module_name){
      if (!val[module_name])return;
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}