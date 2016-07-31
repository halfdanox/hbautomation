$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Product",
  "description": "",
  "id": "product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 14365649760,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login",
  "description": "",
  "id": "product;login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User clicks on Giris Yap",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "There is a match on the page \"test test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5210921578,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Giris_Yap()"
});
formatter.result({
  "duration": 3538266374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test test",
      "offset": 30
    }
  ],
  "location": "StepDefs.there_is_a_match_on_the_page(String)"
});
formatter.result({
  "duration": 4944852247,
  "status": "passed"
});
formatter.after({
  "duration": 1075787620,
  "status": "passed"
});
formatter.before({
  "duration": 1413587621,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Search  product",
  "description": "",
  "id": "product;search--product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User searchs  on \"asus zenfone go\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "There is a match on the search \"asus zenfone go\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 2995684820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asus zenfone go",
      "offset": 18
    }
  ],
  "location": "StepDefs.user_searchs_on(String)"
});
formatter.result({
  "duration": 1969987519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asus zenfone go",
      "offset": 32
    }
  ],
  "location": "StepDefs.there_is_a_match_on_the_search(String)"
});
formatter.result({
  "duration": 1368464008,
  "status": "passed"
});
formatter.after({
  "duration": 304103341,
  "status": "passed"
});
formatter.before({
  "duration": 1285531361,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Keeping the  number of the product on shopping cart",
  "description": "",
  "id": "product;keeping-the--number-of-the-product-on-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "User is on Product  Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User increase product count  size  to two",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User clicks on  sepete ekle",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "# And    User turns back to home page"
    },
    {
      "line": 39,
      "value": "#\tAnd    User clicks sepetim"
    }
  ],
  "line": 40,
  "name": "There should be \"2\" pieces of selected product",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.user_is_on_Product_Page()"
});
formatter.result({
  "duration": 4349508585,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_increase_product_count_size_to_two()"
});
formatter.result({
  "duration": 858257178,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_addToCart()"
});
formatter.result({
  "duration": 148242891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "StepDefs.there_should_be_pieces_of_selected_product(String)"
});
formatter.result({
  "duration": 5078867076,
  "status": "passed"
});
formatter.after({
  "duration": 1067461470,
  "status": "passed"
});
});