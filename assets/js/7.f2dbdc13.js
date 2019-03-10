(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{182:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Docker는 애플리케이션을 신속하게 구축, 테스트 및 배포할 수 있는 소프트웨어 플랫폼입니다. Docker는 소프트웨어를 컨테이너라는 표준화된 유닛으로 패키징하며, 이 컨테이너에는 라이브러리, 시스템 도구, 코드, 런타임 등 소프트웨어를 실행하는 데 필요한 모든 것이 포함되어 있습니다. Docker를 사용하면 환경에 구애받지 않고 애플리케이션을 신속하게 배포 및 확장할 수 있으며 코드가 문제없이 실행될 것임을 확신할 수 있습니다!")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("먼저, Dockerfile을 작성해, container를 만들어봅시다.")]),t._v(" "),t._m(4),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("더 자세한 instruction의 사용법은 "),s("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식문서"),s("OutboundLink")],1),t._v("에서 확인하세요!")])]),t._v(" "),s("p",[t._v("Dockerfile의 기본적인 format입니다.")]),t._v(" "),t._m(5),s("p",[t._v("먼저, Dockerfile을 만들어봅시다.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),s("p",[t._v("FROM instruction을 이용해, 컨테이너의 base가 될 image를 선택합니다.")]),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("Dockerfile에 작성한 instruction을 실행할 경로를 입력합니다.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),s("p",[t._v("파일이나 디렉토리를 도커 컨테이너로 복사합니다.")]),t._v(" "),t._m(13),t._m(14),t._v(" "),s("p",[t._v("COPY와 비슷하지만, url 경로를 입력해서 파일을 가져오는 것이 가능하고,\n압축 파일인 경우, 압축을 해제해 도커 컨테이너 내부로 복사합니다.")]),t._v(" "),t._m(15),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),s("p",[t._v("예제")]),t._v(" "),t._m(20),t._m(21),t._v(" "),s("p",[t._v("ENV instruction을 사용해서, 값을 정해두고, ${key}로 값을 사용할 수 있습니다!")]),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),s("p",[t._v(".gitignore를 사용할 때처럼, Dockerfile에서 COPY, ADD instruction을 사용할 때, 특정 파일이나 디렉토리를 무시할 수 있습니다. 아래는 .dockerignore의 예제입니다.")]),t._v(" "),t._m(28)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"docker-시작하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-시작하기","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 시작하기")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[e("strong",[this._v("Docker를 사용해야 하는 이유?")]),this._v("\nDocker를 사용하면 코드를 더 빨리 전달하고, 애플리케이션 운영을 표준화하고, 코드를 원활하게 이동하고, 리소스 사용률을 높여 비용을 절감할 수 있습니다. Docker를 사용하면 어디서나 안정적으로 실행할 수 있는 단일 객체를 확보하게 됩니다. Docker의 간단한 구문을 사용해 완벽하게 제어할 수 있습니다. 폭넓게 도입되었다는 것은 Docker를 사용할 수 있는 도구 및 상용 애플리케이션의 에코시스템이 강력하다는 의미입니다.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"docker-container-만들기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-container-만들기","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker Container 만들기")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[e("strong",[this._v("컨테이너?")]),this._v("\n도커 컨테이너란 일종의 소프트웨어를 이 소프트웨어의 실행에 필요한 모든 것을 포함하는 완전한 파일 시스템 안에 감싼 형태를 말합니다. OS 레벨의 가상화를 지원하는 것이라고 할 수 있습니다. 이 컨테이너는 코드, 런타임, 시스템 도구, 시스템 라이브러리 등 서버에 설치되는 무엇이든 아우르고 있습니다! 이는 실행 중인 환경에 관계 없이 언제나 동일하게 실행될 것을 보증합니다.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"dockerfile-작성하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-작성하기","aria-hidden":"true"}},[this._v("#")]),this._v(" Dockerfile 작성하기")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# Comment\nINSTRUCTION arguments\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("touch")]),this._v(" ./Dockerfile\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 또는")]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("vi")]),this._v(" ./Dockerfile\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"from"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from","aria-hidden":"true"}},[this._v("#")]),this._v(" FROM")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# Dockerfile\nFROM <image>[:<tag>] [AS <name>]\n# 또는\nFROM <image>[@<digest>] [AS <name>]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"workdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workdir","aria-hidden":"true"}},[this._v("#")]),this._v(" WORKDIR")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[e("strong",[this._v("RUN cd path")]),this._v("로 경로를 변경하더라도,\n다음 instruction을 실행하는 시점에 경로가 초기화되므로 반드시 작성해야합니다.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# Dockerfile\nWORKDIR <path>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"copy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy","aria-hidden":"true"}},[this._v("#")]),this._v(" COPY")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# Dockerfile\nCOPY [--chown=<user>:<group>] <src>... <dest>\n# 만약 경로에 whitespace가 포함되어 있다면, 이러한 형태로 작성해야합니다.\nCOPY [--chown=<user>:<group>] ["<src>",... "<dest>"]\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add","aria-hidden":"true"}},[this._v("#")]),this._v(" ADD")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# Dockerfile\nADD [--chown=<user>:<group>] <src>... <dest>\n# 만약 경로에 whitespace가 포함되어 있다면, 이러한 형태로 작성해야합니다.\nADD [--chown=<user>:<group>] ["<src>",... "<dest>"]\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# Dockerfile\n\n# 도커 컨테이너의 base가 될 이미지를 선택합니다.\nFROM <image>[:<tag>] [AS <name>]\nFROM <image>[@<digest>] [AS <name>]\n\n# Dockerfile에 작성한 instruction을 실행할 경로를 입력합니다.\n# RUN cd <path> 커맨드를 사용해 경로를 변경하더라도,\n# 다음 instruction을 실행하는 시점에 경로가 초기화되므로 반드시 작성해야합니다.\nWORKDIR <path>\n\n# 파일이나 디렉토리를 도커 컨테이너로 복사합니다.\nCOPY [--chown=<user>:<group>] <src>... <dest>\n# 만약 경로에 whitespace가 포함되어 있다면, 이러한 형태로 작성해야합니다.\nCOPY [--chown=<user>:<group>] ["<src>",... "<dest>"]\n\n# COPY와 비슷하지만, url 경로를 입력해서 파일을 가져오는 것이 가능하고,\n# 압축 파일인 경우, 압축을 해제해 도커 컨테이너 내부로 복사합니다.\nADD [--chown=<user>:<group>] <src>... <dest>\n# 만약 경로에 whitespace가 포함되어 있다면, 이러한 형태로 작성해야합니다.\nADD [--chown=<user>:<group>] ["<src>",... "<dest>"]\n\n#\nENTRYPOINT\n\n# /bin/sh -c\nRUN <command>\n\n# /bin/sh -c\nCMD <command>\n\n# 외부로\nEXPOSE <port> [<port>...]\n\n#\nVOLUME <path> [<path>...]\n\n# ENV 값을 설정하는 instruction입니다.\nENV <key> <value>\nENV <key>=<value>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"arg-instruction-활용법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arg-instruction-활용법","aria-hidden":"true"}},[this._v("#")]),this._v(" ARG instruction 활용법")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker build --build-arg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("varname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# Dockerfile\n\nARG <name>[=<default value>]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# Dockerfile\n\nARG VERSION=latest\nFROM busybox:$VERSION\nARG VERSION\nRUN echo $VERSION > image_version\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"env-값의-활용-예제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#env-값의-활용-예제","aria-hidden":"true"}},[this._v("#")]),this._v(" ENV 값의 활용 예제")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# Dockerfile\n\nFROM busybox\nENV foo /bar\nWORKDIR ${foo}   # WORKDIR /bar\nADD . $foo       # ADD . /bar\nCOPY \\$foo /quux # COPY $foo /quux\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"build-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-cache","aria-hidden":"true"}},[this._v("#")]),this._v(" Build Cache")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"docker-build-하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-build-하기","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker build 하기")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Dockerfile로 도커 이미지를 빌드합니다. context는 디렉토리 경로나 url을 입력해줍니다.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# . 경로를 context로 설정해, 도커 이미지를 빌드합니다.")]),t._v("\ndocker build "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Dockerfile 경로를 직접 설정해줄 수 있습니다.")]),t._v("\ndocker build -f /path/to/a/Dockerfile "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 도커 이미지를 빌드하면서, repository에 저장될 태그를 설정할 수 있습니다.")]),t._v("\ndocker build -t shykes/myapp "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 여러개의 태그를 동시에 지정할 수도 있습니다.")]),t._v("\ndocker build -t shykes/myapp:1.0.2 -t shykes/myapp:latest "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"docker-compose-활용하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-활용하기","aria-hidden":"true"}},[this._v("#")]),this._v(" docker compose 활용하기")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dockerignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerignore","aria-hidden":"true"}},[this._v("#")]),this._v(" .dockerignore")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-.dockerignore extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# .dockerignore\n\n# comment\n*/temp*\n*/*/temp*\ntemp?\n")])])])}],!1,null,null,null);e.default=a.exports}}]);