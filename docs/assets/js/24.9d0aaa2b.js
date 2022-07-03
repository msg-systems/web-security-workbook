(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{452:function(t,a,e){"use strict";e.r(a);var s=e(65),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"page-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-title"}},[t._v("#")]),t._v(" "+t._s(t.$page.title))]),t._v(" "),e("p",[t._v(t._s(t.$page.frontmatter.excerpt))]),t._v(" "),e("Badge",{attrs:{text:t.$page.frontmatter.owasp}}),t._v(" "),e("h2",{attrs:{id:"background"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" Background")]),t._v(" "),e("h3",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),e("p",[t._v("Injection attacks are possible if database queries are created based on user input. Consequently, the user gains control over the behavior of the query through the added code or commands. The best known types of such an injection are SQL injections, which take place on relational databases such as MySQL, and NoSQL injections which can happen in a variety of databases such as MongoDB or Redis.")]),t._v(" "),e("p",[t._v("The following mechanisms were defined to inject code into databases:")]),t._v(" "),e("ul",[e("li",[t._v("User input")]),t._v(" "),e("li",[t._v("Cookies")]),t._v(" "),e("li",[t._v("Server variables")]),t._v(" "),e("li",[t._v("Second-order injections (execution of injection is postponed)")])]),t._v(" "),e("h4",{attrs:{id:"sql-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-injection"}},[t._v("#")]),t._v(" SQL Injection")]),t._v(" "),e("p",[t._v("In SQL injections attackers inject data into SQL queries to change their outcome. An example can be seen in the following:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("connection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * from user WHERE name = \'"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\' OR 1=1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),e("p",[t._v("The user input (2. String) is concatenated to the SQL query without further escaping and therefore changes the query's outcome. The induced behaviour causes the WHERE clause to always be true and thus always return all users.")]),t._v(" "),e("p",[t._v("In the literature different types of SQL injections could be elaborated:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Tautologies")]),t._v(" "),e("td",[t._v("OR 1 = 1")])]),t._v(" "),e("tr",[e("td",[t._v("Union queries")]),t._v(" "),e("td",[t._v("; UNION SELECT * FROM SecretTable")])]),t._v(" "),e("tr",[e("td",[t._v("Piggyback queries")]),t._v(" "),e("td",[t._v("; DROP SecretTable")])]),t._v(" "),e("tr",[e("td",[t._v("Incorrect queries")]),t._v(" "),e("td",[t._v("OR OR OR OR")])]),t._v(" "),e("tr",[e("td",[t._v("Extending queries")]),t._v(" "),e("td",[t._v("sqlcmd")])])])]),t._v(" "),e("h4",{attrs:{id:"nosql-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nosql-injection"}},[t._v("#")]),t._v(" NoSQL Injection")]),t._v(" "),e("p",[t._v("A NoSQL injection functions similar to a SQL injection. An example can be seen in the following:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("collection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('{"$ne": " "}')]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])]),e("p",[t._v("The query searches for all titles within its collection which are not equal to an empty string. The resulting dataset contains all titles.")]),t._v(" "),e("p",[t._v("Different types of NoSQL injections exist. However, these are again similar to the SQL injection types:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Operator injections (creates e.g. tautologies)")]),t._v(" "),e("td",[t._v("{$ne: {''}}")])]),t._v(" "),e("tr",[e("td",[t._v("JavaScript injections (creates e.g. tautologies)")]),t._v(" "),e("td",[t._v('$where: "..."')])]),t._v(" "),e("tr",[e("td",[t._v("Piggyback queries")]),t._v(" "),e("td",[t._v('"$or"')])])])]),t._v(" "),e("h3",{attrs:{id:"issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#issues"}},[t._v("#")]),t._v(" Issues")]),t._v(" "),e("ul",[e("li",[t._v("Data could be stolen through attacks which use tautologies or piggyback injections")]),t._v(" "),e("li",[t._v("Data could also be lost or changed to the advantage of the attacker (elevation of privilege)")]),t._v(" "),e("li",[t._v("Successful attacks can not only attack databases but also their underlying systems and infrastructure")])]),t._v(" "),e("h3",{attrs:{id:"solutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[t._v("#")]),t._v(" Solutions")]),t._v(" "),e("ul",[e("li",[t._v("Parameterized queries (e.g. via ORMs)")]),t._v(" "),e("li",[t._v("Usage of secure APIs")]),t._v(" "),e("li",[t._v("Escaping or sanitization ("),e("a",{attrs:{href:"https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OWASP SQL Injection Cheat Sheet"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("li",[t._v("Using of client-directed queries (GraphQL)")])]),t._v(" "),e("h2",{attrs:{id:"technology"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#technology"}},[t._v("#")]),t._v(" Technology")]),t._v(" "),e("p",[t._v("To connect a framework with a database, the usage of a library is most often indispensable. These libraries will be evaluated in the following.")]),t._v(" "),e("p",[t._v("Your favorite framework/library/database is missing? "),e("a",{attrs:{href:"https://websecurityworkbook.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Add it yourself!"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"express"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#express"}},[t._v("#")]),t._v(" Express")]),t._v(" "),e("h4",{attrs:{id:"mysql-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-database"}},[t._v("#")]),t._v(" MySQL database")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/mysql",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("The library "),e("em",[t._v("mysql")]),t._v(" can be used to connect an Express server with and MySQL database. The following shows recommended querying of data:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("connection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM user WHERE name = "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" connection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * from user WHERE name = ?"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ul",[e("li",[t._v("The "),e("em",[t._v("escape()")]),t._v(" Methode escapes potentially dangerous code\n"),e("ul",[e("li",[e("em",[t._v("NO_BACKSLASH_ESCAPE")]),t._v(" needs to be disabled, otherwise the backslash character cannot be used for escaping")])])]),t._v(" "),e("li",[t._v("? are placeholder for user input which is escaped before its added to the SQL query")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/sequelize",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sequelize"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("em",[t._v("Sequelize")]),t._v(" is "),e("a",{attrs:{href:"https://www.npmjs.com/search?q=orm",target:"_blank",rel:"noopener noreferrer"}},[t._v("one of many ORMs"),e("OutboundLink")],1),t._v(" which are available on "),e("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npmjs"),e("OutboundLink")],1),t._v(". ORMs function through the definition of a model which represents data inside of the database. Therefore, parameters, which are passed to the database, can be given a datatype to which the parameter is parsed to.")]),t._v(" "),e("p",[e("strong",[t._v("As a result, queries are secure.")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sequelize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" DataTypes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STRING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lastName")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" DataTypes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STRING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/getUser'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    User"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("where")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\' OR 1=1 --"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"mongodb-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-database"}},[t._v("#")]),t._v(" MongoDB database")]),t._v(" "),e("p",[t._v("When working with MongoDB, the most common libraries are "),e("a",{attrs:{href:"https://www.npmjs.com/package/mongodb",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongodb"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://www.npmjs.com/package/mongoose",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongoose"),e("OutboundLink")],1),t._v(" (ORM).")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),e("p",[e("strong",[t._v("The usage is insecure if no sanitization library is used. Attacks possible through "),e("RouterLink",{attrs:{to:"/owasp2021/A3-Injection/#context"}},[t._v("operator injections")]),t._v(".")],1)])]),t._v(" "),e("p",[e("strong",[t._v("Solution:")]),t._v(" The usage of sanitization libraries such as "),e("a",{attrs:{href:"https://www.npmjs.com/package/express-mongo-sanitize",target:"_blank",rel:"noopener noreferrer"}},[t._v("express-mongo-sanitize"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://www.npmjs.com/package/mongo-sanitize",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongo-sanitize"),e("OutboundLink")],1),t._v(". The former prior library is the preferred choice since it functions with Express' middleware and adds therefore more Security By Default.")]),t._v(" "),e("h3",{attrs:{id:"spring-boot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot"}},[t._v("#")]),t._v(" Spring Boot")]),t._v(" "),e("h4",{attrs:{id:"mysql-database-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-database-2"}},[t._v("#")]),t._v(" MySQL database")]),t._v(" "),e("p",[t._v("In Java, different ways of querying data from a MySQL database exist. Both Java's "),e("code",[t._v("mysql-connector-java")]),t._v(" and Spring's "),e("code",[t._v("spring-boot-starter-data-jdbc")]),t._v(" offer secure data querying with "),e("code",[t._v("PreparedStatement")]),t._v("'s or "),e("code",[t._v("NamedParameterJdbcTemplate")]),t._v("'s. However, queries can also be created insecurely. In contrast, "),e("code",[t._v("spring-boot-starter-data-jpa")]),t._v(" can be used as ORM by defining "),e("code",[t._v("Entity")]),t._v(" classes making the queries secure.")]),t._v(" "),e("h4",{attrs:{id:"mongodb-database-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-database-2"}},[t._v("#")]),t._v(" MongoDB database")]),t._v(" "),e("p",[t._v("When using MongoDB as underlying database, a Spring Boot developer will most likely use "),e("code",[t._v("spring-boot-starter-data-jpa")]),t._v(". While testing and researching for potential security issues, none were found.")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);