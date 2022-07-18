## 一, todoList案例相關
    1.拆分組件,實現靜態組件, 注意：className,style的寫法
    2.動態初始化列表, 如何確定將數據放在哪個組件的state中？
        某個組件使用：放在其身的state
        某些組件使用：放在他們共同的父組件state中（官方稱此操作為：狀態提升）
    3.關於父子之間通信：
        [父組件]給[子組件]傳遞數據：通過props傳遞
        [子組件]給[父組件]傳遞數據：通過props傳遞,要求父提前給子傳遞一個函數
    4.注意 defaultChecked 和 checked的區別, 類似的還有：defaultValue 和 value
    5.狀態在哪裡, 操作狀態的方法就在哪裡

## 二, github搜索案例相關
    1.設計狀態時要考慮全面, 例如帶有網路請求的組件, 要考慮失敗怎麼辦
    2.ES6小知識：解構賦值+重命名
        let obj = {a:{b:1}}
        const {a} = obj; //傳統解構賦值
        const {a:{b}} = obj; //連續解構賦值
        const {a:{b:value}} = obj; //連續解構賦值+重命名
    3.消息訂閱與發佈機制
        1.先訂閱, 再發佈（理解：有一種隔空對話的感覺）
        2.適用於任意組件間通信
        3.要在組件的 componentWillUnmount 中取消訂閱
    4.fetch發送請求（關注分離的設計思想）
        try {
            const response = await fetch(`/api1/search/users2?q=${keyWord}`);
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.log('請求錯誤',error)
        }

## 三, 路由的基本使用
    1.明確好界面中的導航區, 展示區
    2.導航區的a標籤改為Link標籤
        <Link to="/xxx">Demo</Link>
    3.展示區寫Route標籤進行路徑的匹配
        <Route path="/xxx" component={Demo}/>
    4.<App>的最外層包一個<BrowserRouter>或<HashRouter>

## 四, 路由組件與一般組件
    1.寫法不同：
        一般組件：<Demo/>
        路由組件：<Route path="/demo" components={Demo}>
    2.存放資料夾位置不同：
        一般組件：components
        路由組件：pages
    3.接收到的props不同：
        一般組件：寫組件標籤傳遞什麼, 就收到什麼
        路由組件：接收到三個固定屬性
                history:
                    go: ƒ go(n)
                    goBack: ƒ goBack()
                    goForward: ƒ goForward()
                    push: ƒ push(path, state)
                    replace: ƒ replace(path, state)
                location:
                    pathname: "/about"
                    search: ""
                    state: undefined
                match:
                    params: {}git
                    path: "/about"
                    url: "/about"
## 五, NavLink與封裝NavLink
    1.NavLink可以實現路由連接的高亮, 通過activeClassName指定樣式名
    2.標籤體內容是一個特殊的標籤屬性
    3.通過this.props.children可以獲取標籤體內容
## 六, Swith的使用
    1.通常情況下, path和component是一一對應的關係
    2.Switch可以提高路由匹配效率(單一匹配)
## 七, 解決多級路徑刷新頁面樣式丟失的問題
    1.public/index.html 中 引入樣式時不寫 ./ 寫 / (常用)
    2.public/index.html 中 引入樣式時不寫 ./ 寫 %PUBLIC_URL% (常用)
    3.使用 HashRouter
## 八, 路由的嚴格匹配與模糊匹配
    1.默認使用的是模糊匹配(簡單記:【輸入的路徑】必須包含要【匹配的路徑】,且順序一致)
    2.開啟嚴格匹配:<Route exact={true} path="/about" component={About}>
    3.嚴格匹配不要隨便開啟,需要再開,有時候開啟會導致無法繼續匹配二級路由
## 九, Redirect的使用
    1.一般寫在所有路由註冊的最下方,當所有路由都無法匹配時,跳轉到Redirect
    2.具體編碼:
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
          <Redirect to="/about"/>
        </Switch>
## 十, 嵌套路由
    1.註冊路由時要寫上父路由的path值
    2.路由的匹配是按照註冊路由的順序進行的
## 十一, 向路由組件傳遞參數
    1.params參數
        路由連接(攜帶參數):<Link to='/demo/test/tom/18'>詳情</Link>
        註冊路由(聲明接收):<Route path='/demo/test/:name/:age' component={Test}>
        接收參數:const{name,age} = this.props.match.params