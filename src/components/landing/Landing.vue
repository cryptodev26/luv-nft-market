<template>
  <div class="page-wrapper">
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
      role="banner"
      class="header w-nav"
    >
      <div class="container-header">
        <div class="split-content header-left">
          <a
            href="/"
            aria-current="page"
            class="brand-logo w-nav-brand w--current"
          >
            <img src="@/assets/logo.png" alt="" class="header-logo" />
          </a>
          <div class="nav-container">
            <ul role="list" class="cart-desktop">
              <li class="nav-item-wrapper">
                <div
                  data-node-type="commerce-cart-wrapper"
                  data-open-product=""
                  data-wf-cart-type="modal"
                  data-wf-cart-query="query Dynamo2 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          value
          unit
          decimalValue
          string
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        value
        unit
        decimalValue
        string
      }
      total {
        value
        unit
        decimalValue
        string
      }
      updatedOn
      userItems {
        count
        sku {
          f__draft_0ht
          f__archived_0ht
          f_main_image_4dr {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          f__draft_0ht
          f__archived_0ht
          f_name_
          f_sku_properties_3dr {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        id
        rowTotal {
          value
          unit
          decimalValue
          string
        }
      }
      userItemsCount
    }
  }
  site {
    id
    commerce {
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}
"
                  data-wf-page-link-href-prefix=""
                  class="w-commerce-commercecartwrapper cart"
                >
                  <a
                    href="/#"
                    data-node-type="commerce-cart-open-link"
                    class="w-commerce-commercecartopenlink cart-button w-inline-block"
                  >
                    <div class="w-inline-block">Cart</div>
                    <div class="w-inline-block">(</div>
                    <div
                      data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                      class="w-commerce-commercecartopenlinkcount cart-quantity"
                    >
                      0
                    </div>
                    <div class="w-inline-block">)</div>
                  </a>
                  <div
                    data-node-type="commerce-cart-container-wrapper"
                    style="display: none"
                    class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"
                  >
                    <div
                      data-node-type="commerce-cart-container"
                      class="w-commerce-commercecartcontainer cart-container"
                    >
                      <div class="w-commerce-commercecartheader cart-header">
                        <h4 class="w-commerce-commercecartheading cart-title">
                          Your Cart
                        </h4>
                        <a
                          href="/#"
                          data-node-type="commerce-cart-close-link"
                          class="w-commerce-commercecartcloselink close-button-cart w-inline-block"
                        ></a>
                      </div>
                      <div class="w-commerce-commercecartformwrapper">
                        <form
                          data-node-type="commerce-cart-form"
                          style="display: none"
                          class="w-commerce-commercecartform"
                        >
                          <script
                            type="text/x-wf-template"
                            id="wf-template-a9ceba2c-4f95-b2e6-8360-f0bad9d10ac9"
                          >
                            %3Cdiv%20class%3D%22w-commerce-commercecartitem%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20cart-product-image%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20cart-product-title%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-a9ceba2c-4f95-b2e6-8360-f0bad9d10acf%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522cart-file-options%2520w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-a9ceba2c-4f95-b2e6-8360-f0bad9d10acf%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22cart-file-options%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3Ca%20href%3D%22%23%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22cart-remove%20w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cinput%20type%3D%22text%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartquantity%20hidden-desktop%22%20name%3D%22quantity%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E
                          </script>
                          <div
                            class="w-commerce-commercecartlist"
                            data-wf-collection="database.commerceOrder.userItems"
                            data-wf-template-id="wf-template-a9ceba2c-4f95-b2e6-8360-f0bad9d10ac9"
                          >
                            <div class="w-commerce-commercecartitem">
                              <img
                                data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D"
                                src="/"
                                alt=""
                                class="w-commerce-commercecartitemimage cart-product-image w-dyn-bind-empty"
                              />
                              <div class="w-commerce-commercecartiteminfo">
                                <div
                                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D"
                                  class="w-commerce-commercecartproductname cart-product-title w-dyn-bind-empty"
                                ></div>
                                <div
                                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D"
                                >
                                  $ 0.00 USD
                                </div>
                                <script
                                  type="text/x-wf-template"
                                  id="wf-template-a9ceba2c-4f95-b2e6-8360-f0bad9d10acf"
                                >
                                  %3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22cart-file-options%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E
                                </script>
                                <ul
                                  data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D"
                                  class="w-commerce-commercecartoptionlist"
                                  data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr"
                                  data-wf-template-id="wf-template-a9ceba2c-4f95-b2e6-8360-f0bad9d10acf"
                                >
                                  <li>
                                    <span
                                      data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D"
                                      class="w-dyn-bind-empty"
                                    ></span>
                                    <span>: </span>
                                    <span
                                      data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D"
                                      class="cart-file-options w-dyn-bind-empty"
                                    ></span>
                                  </li>
                                </ul>
                                <a
                                  href="/#"
                                  data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                                  class="cart-remove w-inline-block"
                                  data-wf-cart-action="remove-item"
                                  data-commerce-sku-id=""
                                >
                                  <div>Remove</div>
                                </a>
                              </div>
                              <input
                                type="text"
                                required=""
                                pattern="^[0-9]+$"
                                inputmode="numeric"
                                data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                                class="w-commerce-commercecartquantity hidden-desktop"
                                name="quantity"
                                data-wf-cart-action="update-item-quantity"
                                data-commerce-sku-id=""
                                value="1"
                              />
                            </div>
                          </div>
                          <div
                            class="w-commerce-commercecartfooter cart-footer"
                          >
                            <div class="w-commerce-commercecartlineitem">
                              <div>Subtotal</div>
                              <div
                                data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                                class="w-commerce-commercecartordervalue cart-subtotal"
                              ></div>
                            </div>
                            <div>
                              <div
                                data-node-type="commerce-cart-quick-checkout-actions"
                                style="display: none"
                              >
                                <a
                                  data-node-type="commerce-cart-apple-pay-button"
                                  style="
                                    background-image: -webkit-named-image(apple-pay-logo-white);
                                    background-size: 100% 50%;
                                    background-position: 50% 50%;
                                    background-repeat: no-repeat;
                                  "
                                  class="w-commerce-commercecartapplepaybutton apple-pay"
                                >
                                  <div></div>
                                </a>
                                <a
                                  data-node-type="commerce-cart-quick-checkout-button"
                                  style="display: none"
                                  class="w-commerce-commercecartquickcheckoutbutton"
                                >
                                  <svg
                                    class="w-commerce-commercequickcheckoutgoogleicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <defs>
                                      <polygon
                                        id="google-mark-a"
                                        points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                                      ></polygon>
                                      <polygon
                                        id="google-mark-c"
                                        points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                                      ></polygon>
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                      <path
                                        fill="#4285F4"
                                        d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                                      ></path>
                                      <path
                                        fill="#34A853"
                                        d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                                      ></path>
                                      <g transform="translate(0 4)">
                                        <mask id="google-mark-b" fill="#fff">
                                          <use
                                            xlink:href="#google-mark-a"
                                          ></use>
                                        </mask>
                                        <path
                                          fill="#FBBC04"
                                          d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                          mask="url(#google-mark-b)"
                                        ></path>
                                      </g>
                                      <mask id="google-mark-d" fill="#fff">
                                        <use xlink:href="#google-mark-c"></use>
                                      </mask>
                                      <path
                                        fill="#EA4335"
                                        d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                        mask="url(#google-mark-d)"
                                      ></path>
                                    </g>
                                  </svg>
                                  <svg
                                    class="w-commerce-commercequickcheckoutmicrosofticon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <g fill="none" fill-rule="evenodd">
                                      <polygon
                                        fill="#F05022"
                                        points="7 7 1 7 1 1 7 1"
                                      ></polygon>
                                      <polygon
                                        fill="#7DB902"
                                        points="15 7 9 7 9 1 15 1"
                                      ></polygon>
                                      <polygon
                                        fill="#00A4EE"
                                        points="7 15 1 15 1 9 7 9"
                                      ></polygon>
                                      <polygon
                                        fill="#FFB700"
                                        points="15 15 9 15 9 9 15 9"
                                      ></polygon>
                                    </g>
                                  </svg>
                                  <div>Pay with browser.</div>
                                </a>
                              </div>
                              <div
                                class="button-container full-width mg-top-16px"
                              >
                                <a
                                  href="https://nfttemplate.webflow.io/checkout"
                                  value="Continue to Checkout"
                                  data-node-type="cart-checkout-button"
                                  class="w-commerce-commercecartcheckoutbutton button-primary small"
                                  data-loading-text="Hang Tight..."
                                >
                                  Continue to Checkout
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div
                          class="w-commerce-commercecartemptystate empty-state"
                        >
                          <div>No items found.</div>
                        </div>
                        <div
                          style="display: none"
                          data-node-type="commerce-cart-error"
                          class="w-commerce-commercecarterrorstate error-message"
                        >
                          <div
                            class="w-cart-error-msg"
                            data-w-cart-quantity-error="Product is not available in this quantity."
                            data-w-cart-checkout-error="Checkout is disabled on this site."
                            data-w-cart-general-error="Something went wrong when adding this item to the cart."
                            data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                          >
                            Product is not available in this quantity.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <nav role="navigation" class="nav-menu w-nav-menu">
              <ul role="list" class="header-navigation">
                <li class="nav-item-wrapper header-nav-item">
                  <a href="/" aria-current="page" class="nav-link w--current"
                    >HOME</a
                  >
                </li>
                <!-- <li class="nav-item-wrapper">
                  <a href="/rmrk/mint" class="nav-link">MARKET</a>
                </li>
                <li class="nav-item-wrapper">
                  <a href="/rmrk/gallery" class="nav-link">GALLERY</a>
                </li> -->
                <li class="nav-item-wrapper header-nav-item">
                  <a href="https://luvnft.medium.com/" class="nav-link">BLOG</a>
                </li>
                <li class="nav-item-wrapper">
                  <div
                    data-hover=""
                    data-delay="0"
                    data-w-id="45c82122-ac7e-c995-1427-8593ed75fc00"
                    class="header-dropdown w-dropdown"
                  >
                    <div class="header-dropdown-toggle w-dropdown-toggle header-nav-item">
                      <a class="nav-link" style="font-weight:700;">CONTACT</a>
                    </div>
                    <!-- <nav class="mega-menu-container w-dropdown-list">
                      <div class="menu-grid-wrapper">
                        <div class="w-layout-grid menu-grid">
                          <div class="mega-menu">
                            <h3 class="mega-menu-title">Pages</h3>
                            <div class="mega-menu-column-1">
                              <a
                                href="/"
                                aria-current="page"
                                class="mega-menu-link w--current"
                                >HOME</a
                              ><a href="https://nfttemplate.webflow.io/store" class="mega-menu-link"
                                >Store</a
                              >
                              <a
                                href="https://nfttemplate.webflow.io/product/crystal-card-1"
                                class="mega-menu-link"
                                >Single Product</a
                              >
                            </div>
                          </div>
                          <div class="mega-menu">
                            <h3 class="mega-menu-title">Utility Pages</h3>
                            <div class="mega-menu-column-1">
                              <a
                                href="https://nfttemplate.webflow.io/utility-pages/start-here"
                                class="mega-menu-link"
                                >Start Here</a
                              >
                              <a
                                href="https://nfttemplate.webflow.io/utility-pages/style-guide"
                                class="mega-menu-link"
                                >Style Guide</a
                              >
                              <a href="https://nfttemplate.webflow.io/404" class="mega-menu-link"
                                >404 Not Found</a
                              ><a href="https://nfttemplate.webflow.io/401" class="mega-menu-link"
                                >Password Protected</a
                              >
                              <a
                                href="https://nfttemplate.webflow.io/utility-pages/licenses"
                                class="mega-menu-link"
                                >Licenses</a
                              >
                              <a
                                href="https://nfttemplate.webflow.io/utility-pages/changelog"
                                class="mega-menu-link"
                                >Changelog</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav> -->
                  </div>
                </li>
                <li class="nav-item-wrapper button">
                  <div class="button-container full-width">
                    <a href="#" class="button-primary small full-width w-button"
                      >CONNECT WALLET</a
                    >
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="split-content header-right">
          <div class="mobile-menu">
            <div
              class="menu-button w-nav-button"
              style="-webkit-user-select: text;"
              aria-label="menu"
              role="button"
              tabindex="0"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div class="menu-button-icon-wrapper">
                <div class="menu-button-icon">
                  <div class="menu-line-top"></div>
                  <div class="menu-line-middle"></div>
                  <div class="menu-line-bottom"></div>
                </div>
              </div>
            </div>
            <ul role="list" class="cart-mobile">
              <li class="nav-item-wrapper cart">
                <div
                  data-node-type="commerce-cart-wrapper"
                  data-open-product=""
                  data-wf-cart-type="modal"
                  data-wf-cart-query="query Dynamo2 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          value
          unit
          decimalValue
          string
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        value
        unit
        decimalValue
        string
      }
      total {
        value
        unit
        decimalValue
        string
      }
      updatedOn
      userItems {
        count
        sku {
          f__draft_0ht
          f__archived_0ht
          f_main_image_4dr {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          f__draft_0ht
          f__archived_0ht
          f_name_
          f_sku_properties_3dr {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        id
        rowTotal {
          value
          unit
          decimalValue
          string
        }
      }
      userItemsCount
    }
  }
  site {
    id
    commerce {
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}
"
                  data-wf-page-link-href-prefix=""
                  class="w-commerce-commercecartwrapper cart"
                >
                  <a
                    href="/#"
                    data-node-type="commerce-cart-open-link"
                    class="w-commerce-commercecartopenlink cart-button w-inline-block"
                  >
                    <div class="w-inline-block hidden">Cart</div>
                    <div class="w-inline-block">(</div>
                    <div
                      data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                      class="w-commerce-commercecartopenlinkcount cart-quantity"
                    >
                      0
                    </div>
                    <div class="w-inline-block">)</div>
                  </a>
                  <div
                    data-node-type="commerce-cart-container-wrapper"
                    style="display: none"
                    class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"
                  >
                    <div
                      data-node-type="commerce-cart-container"
                      class="w-commerce-commercecartcontainer cart-container"
                    >
                      <div class="w-commerce-commercecartheader cart-header">
                        <h4 class="w-commerce-commercecartheading cart-title">
                          Your Cart
                        </h4>
                        <a
                          href="/#"
                          data-node-type="commerce-cart-close-link"
                          class="w-commerce-commercecartcloselink close-button-cart w-inline-block"
                        ></a>
                      </div>
                      <div class="w-commerce-commercecartformwrapper">
                        <form
                          data-node-type="commerce-cart-form"
                          style="display: none"
                          class="w-commerce-commercecartform"
                        >
                          <script
                            type="text/x-wf-template"
                            id="wf-template-f20819fc-7019-7cea-2eb5-a221eccd61d1"
                          >
                            %3Cdiv%20class%3D%22w-commerce-commercecartitem%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20cart-product-image%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20cart-product-title%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-f20819fc-7019-7cea-2eb5-a221eccd61d7%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522cart-file-options%2520w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-f20819fc-7019-7cea-2eb5-a221eccd61d7%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22cart-file-options%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3Ca%20href%3D%22%23%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22cart-remove%20w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cinput%20type%3D%22text%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartquantity%20hidden-desktop%22%20name%3D%22quantity%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E
                          </script>
                          <div
                            class="w-commerce-commercecartlist"
                            data-wf-collection="database.commerceOrder.userItems"
                            data-wf-template-id="wf-template-f20819fc-7019-7cea-2eb5-a221eccd61d1"
                          >
                            <div class="w-commerce-commercecartitem">
                              <img
                                data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D"
                                src="/"
                                alt=""
                                class="w-commerce-commercecartitemimage cart-product-image w-dyn-bind-empty"
                              />
                              <div class="w-commerce-commercecartiteminfo">
                                <div
                                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D"
                                  class="w-commerce-commercecartproductname cart-product-title w-dyn-bind-empty"
                                ></div>
                                <div
                                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D"
                                >
                                  $ 0.00 USD
                                </div>
                                <script
                                  type="text/x-wf-template"
                                  id="wf-template-f20819fc-7019-7cea-2eb5-a221eccd61d7"
                                >
                                  %3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22cart-file-options%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E
                                </script>
                                <ul
                                  data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D"
                                  class="w-commerce-commercecartoptionlist"
                                  data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr"
                                  data-wf-template-id="wf-template-f20819fc-7019-7cea-2eb5-a221eccd61d7"
                                >
                                  <li>
                                    <span
                                      data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D"
                                      class="w-dyn-bind-empty"
                                    ></span>
                                    <span>: </span>
                                    <span
                                      data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D"
                                      class="cart-file-options w-dyn-bind-empty"
                                    ></span>
                                  </li>
                                </ul>
                                <a
                                  href="/#"
                                  data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                                  class="cart-remove w-inline-block"
                                  data-wf-cart-action="remove-item"
                                  data-commerce-sku-id=""
                                >
                                  <div>Remove</div>
                                </a>
                              </div>
                              <input
                                type="text"
                                required=""
                                pattern="^[0-9]+$"
                                inputmode="numeric"
                                data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                                class="w-commerce-commercecartquantity hidden-desktop"
                                name="quantity"
                                data-wf-cart-action="update-item-quantity"
                                data-commerce-sku-id=""
                                value="1"
                              />
                            </div>
                          </div>
                          <div
                            class="w-commerce-commercecartfooter cart-footer"
                          >
                            <div class="w-commerce-commercecartlineitem">
                              <div>Subtotal</div>
                              <div
                                data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                                class="w-commerce-commercecartordervalue cart-subtotal"
                              ></div>
                            </div>
                            <div>
                              <div
                                data-node-type="commerce-cart-quick-checkout-actions"
                                style="display: none"
                              >
                                <a
                                  data-node-type="commerce-cart-apple-pay-button"
                                  style="
                                      background-image: -webkit-named-image(apple-pay-logo-white);
                                      background-size: 100% 50%;
                                      background-position: 50% 50%;
                                      background-repeat: no-repeat;
                                    "
                                  class="w-commerce-commercecartapplepaybutton apple-pay"
                                >
                                  <div></div>
                                </a>
                                <a
                                  data-node-type="commerce-cart-quick-checkout-button"
                                  style="display: none"
                                  class="w-commerce-commercecartquickcheckoutbutton"
                                >
                                  <svg
                                    class="w-commerce-commercequickcheckoutgoogleicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <defs>
                                      <polygon
                                        id="google-mark-a"
                                        points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                                      ></polygon>
                                      <polygon
                                        id="google-mark-c"
                                        points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                                      ></polygon>
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                      <path
                                        fill="#4285F4"
                                        d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                                      ></path>
                                      <path
                                        fill="#34A853"
                                        d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                                      ></path>
                                      <g transform="translate(0 4)">
                                        <mask id="google-mark-b" fill="#fff">
                                          <use
                                            xlink:href="#google-mark-a"
                                          ></use>
                                        </mask>
                                        <path
                                          fill="#FBBC04"
                                          d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                          mask="url(#google-mark-b)"
                                        ></path>
                                      </g>
                                      <mask id="google-mark-d" fill="#fff">
                                        <use xlink:href="#google-mark-c"></use>
                                      </mask>
                                      <path
                                        fill="#EA4335"
                                        d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                        mask="url(#google-mark-d)"
                                      ></path>
                                    </g>
                                  </svg>
                                  <svg
                                    class="w-commerce-commercequickcheckoutmicrosofticon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <g fill="none" fill-rule="evenodd">
                                      <polygon
                                        fill="#F05022"
                                        points="7 7 1 7 1 1 7 1"
                                      ></polygon>
                                      <polygon
                                        fill="#7DB902"
                                        points="15 7 9 7 9 1 15 1"
                                      ></polygon>
                                      <polygon
                                        fill="#00A4EE"
                                        points="7 15 1 15 1 9 7 9"
                                      ></polygon>
                                      <polygon
                                        fill="#FFB700"
                                        points="15 15 9 15 9 9 15 9"
                                      ></polygon>
                                    </g>
                                  </svg>
                                  <div>Pay with browser.</div>
                                </a>
                              </div>
                              <div
                                class="button-container full-width mg-top-16px"
                              >
                                <a
                                  href="https://nfttemplate.webflow.io/checkout"
                                  value="Continue to Checkout"
                                  data-node-type="cart-checkout-button"
                                  class="w-commerce-commercecartcheckoutbutton button-primary small"
                                  data-loading-text="Hang Tight..."
                                >
                                  Continue to Checkout
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div
                          class="w-commerce-commercecartemptystate empty-state"
                        >
                          <div>No items found.</div>
                        </div>
                        <div
                          style="display: none"
                          data-node-type="commerce-cart-error"
                          class="w-commerce-commercecarterrorstate error-message"
                        >
                          <div
                            class="w-cart-error-msg"
                            data-w-cart-quantity-error="Product is not available in this quantity."
                            data-w-cart-checkout-error="Checkout is disabled on this site."
                            data-w-cart-general-error="Something went wrong when adding this item to the cart."
                            data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                          >
                            Product is not available in this quantity.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="hidden-tablet">
            <div class="button-container">
              <a href="#" class="button-primary small w-button"
                >CONNECT WALLET</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      data-w-id="4eabff81-1a43-f11f-339b-2d46f64fc52a"
      class="section hero-home"
    >
      <div class="container-default w-container">
        <div class="w-layout-grid hero-grid">
          <div
            data-w-id="bc03214d-5378-fb49-67b8-1af4a8eae15c"
            style="
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                opacity: 0;
              "
          >
            <h1>
              I LUV MY <span style="color:#beef00 !important;">N</span
              ><span style="color:#FE019A;">FT</span>
            </h1>
            <p class="paragraph-large">
              A tribe owned NFT marketplace to create, share, sell and buy digital
              collectibles.
            </p>
            <div class="mg-top-48px">
              <div class="button-container">
                <a
                  href="https://api.elasticemail.com/form?lid=_gqT8YCXDfz5r4kCOLecrw2"
                  class="button-primary w-button"
                  >SIGN UP</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="@/assets/Ellipse_header.png"
        data-w-id="e5a52d42-0186-1e21-b84e-a2707429aefc"
        style="
            -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0)
              skew(0, 0);
            opacity: 0;
          "
        alt=""
        class="blob-home-hero"
      />
      <img
        src="@/assets/1.png"
        loading="lazy"
        width="368.5"
        style="
            -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0)
              skew(0, 0);
            opacity: 0;
          "
        data-w-id="1250e44f-4ea4-8cbb-6009-8ef4f74ffe28"
        alt=""
        class="bubble hero-home"
      />
      <img
        src="@/assets/about-2.png"
        data-w-id="554897b1-25e1-e3a4-3605-133d21b38602"
        style="
            -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0)
              skew(0, 0);
            opacity: 0;
          "
        alt=""
        class="donuts hero-home"
      />
    </div>
    <div
      id="about"
      data-w-id="459cd8d6-6bd6-c406-d0f4-2fb0365f9af8"
      class="section shop-home"
    >
      <div class="container-default w-container">
        <div class="w-layout-grid grid-about">
          <div class="image-about-me-container">
            <img
              src="@/assets/Ellipse 140.png"
              loading="lazy"
              width="368.5"
              data-w-id="9dd1eb0d-4574-d2ec-03a3-f5e233c8efd4"
              alt=""
              class="bubble about-me"
            />
            <img
              src="@/assets/about-1.png"
              loading="lazy"
              sizes="(max-width: 479px) 82vw, (max-width: 767px) 85vw, (max-width: 991px) 94vw, (max-width: 1439px) 95vw, 1186.0751953125px"
              alt=""
              class="image-about-me"
            />
            <div
              style="
                  opacity: 0;
                  -webkit-transform: translate3d(-62px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
                    rotateZ(-19deg) skew(0, 0);
                  -moz-transform: translate3d(-62px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
                    rotateZ(-19deg) skew(0, 0);
                  -ms-transform: translate3d(-62px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
                    rotateZ(-19deg) skew(0, 0);
                  transform: translate3d(-62px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
                    rotateZ(-19deg) skew(0, 0);
                "
              class="gradient-bottom-about"
            ></div>
          </div>
          <div
            data-w-id="691ff07f-40ad-a418-76a1-adb1e6a6e7b5"
            style="
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                opacity: 0;
              "
          >
            <h2>CREATORS</h2>
            <p class="paragraph-large">
              We are looking for artists to empower the new creator's economy.
              LUV NFT is still in early access, onboarding only a small number
              of hand-picked creators and LUVfluencers.
            </p>
            <div class="mg-top-48px">
              <div class="button-container">
                <a href="/#contact" class="button-primary w-button">APPLY</a>
              </div>
            </div>

            <div class="mg-top-48px"></div>
            <div class="mg-top-48px"></div>
          </div>
        </div>
      </div>
      <img
        src="@/assets/about-3.png"
        loading="lazy"
        style="
            -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0)
              skew(0, 0);
            opacity: 0;
          "
        data-w-id="172a4418-1d22-b593-830b-2fdcda5e3d8e"
        alt=""
        class="donuts about-home"
      />
    </div>
    <div
      id="store"
      data-w-id="cc85c299-03d7-156e-0385-e31410ae0102"
      class="section shop-home"
    >
      <div class="container-default w-container">
        <div
          data-w-id="a7b9cdbe-a4d9-b41f-971c-ca92967cbec6"
          style="
              -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              opacity: 0;
            "
          class="mg-bottom-58px"
        >
          <div class="container-medium-730px">
            <div class="text-center">
              <h2>
                <span style="color:#beef00 !important;">N</span
                ><span style="color:#FE019A;">FT</span> GALLERY
              </h2>
            </div>
          </div>
        </div>
        <div
          data-w-id="b7b6555e-a7b8-f35c-ae3d-c161983d3e16"
          style="
              -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              opacity: 0;
            "
          class="w-dyn-list"
        >
          <div role="list" class="products-container w-dyn-items">
            <div role="listitem" class="w-dyn-item">
              <a
                href="#"
                class="product-card-image w-inline-block"
              >
                <img src="@/assets/critical-card-1.png" alt="" />
              </a>
              <div
                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                class="product-card-pricing"
              >
                0.5100 KSM
              </div>
              <a href="/#" class="link-product-container w-inline-block"
                ><h3 class="link-product">Crystal Card 1</h3></a
              >
              <p></p>
              <a
                data-w-id="c48a718e-1a62-55bc-f080-ef674e532b49"
                href="#"
                class="link-wrapper learn-more-product w-inline-block"
              >
                <div>View NFT</div>
                <div class="underline-wrapper">
                  <div style="width: 0px" class="underline"></div>
                </div>
              </a>
            </div>
            <div role="listitem" class="w-dyn-item">
              <a
                href="#"
                class="product-card-image w-inline-block"
              >
                <img src="@/assets/critical-card-2.png" alt="" />
              </a>
              <div
                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                class="product-card-pricing"
              >
                0.1019 KSM
              </div>
              <a href="/#" class="link-product-container w-inline-block"
                ><h3 class="link-product">Crystal Card 2</h3></a
              >
              <p></p>
              <a
                data-w-id="c48a718e-1a62-55bc-f080-ef674e532b49"
                href="#"
                class="link-wrapper learn-more-product w-inline-block"
              >
                <div>View NFT</div>
                <div class="underline-wrapper">
                  <div style="width: 0px" class="underline"></div>
                </div>
              </a>
            </div>
            <div role="listitem" class="w-dyn-item">
              <a
                href="#"
                class="product-card-image w-inline-block"
              >
                <img src="@/assets/critical-card-3.png" alt="" />
              </a>
              <div
                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                class="product-card-pricing"
              >
                0.6120 KSM
              </div>
              <a href="/#" class="link-product-container w-inline-block"
                ><h3 class="link-product">Crystal Card 3</h3></a
              >
              <p></p>
              <a
                data-w-id="c48a718e-1a62-55bc-f080-ef674e532b49"
                href="#"
                class="link-wrapper learn-more-product w-inline-block"
              >
                <div>View NFT</div>
                <div class="underline-wrapper">
                  <div style="width: 0px" class="underline"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="@/assets/Ellipse 140.png"
        style="opacity:0.22;"
        alt=""
        class="blob-home-gallery-one"
      />
      <img
        src="https://assets.website-files.com/605a8ad8853d7fc62334c73e/605a9c8e59d1b810c572a570_blur-blob-nft-webflow-template.svg"
        alt=""
        class="blob-home-gallery-two"
      />
    </div>
    <div id="work" class="section my-work">
      <div class="container-default w-container">
        <div
          data-w-id="f724c142-e2d0-0a9b-ead3-f4893760af6c"
          style="
              -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              opacity: 0;
            "
          class="top-content"
        >
          <h2 class="mg-bottom-0">
            WHY LUV <span style="color:#beef00 !important;">N</span
            ><span style="color:#FE019A;">FT</span>
          </h2>
        </div>
        <div
          data-w-id="7469260d-8b28-4036-529d-32eb66383187"
          style="
              -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                rotateZ(0) skew(0, 0);
              opacity: 0;
            "
          class="w-layout-grid grid-my-work"
        >
          <div class="card-crystal">
            <h3>NO GAS FEES</h3>
            <p class="paragraph-large">
              LUV NFT uses Polkadot/Kusama network which allows us to offer
              gas-free minting and trading.
            </p>
          </div>
          <div class="card-crystal">
            <h3>GO DIGITAL</h3>
            <p class="paragraph-large">
              Turn your customers or fans to patrons by selling digital goods
              verified with blockchain technology.
            </p>
          </div>
          <div class="card-crystal">
            <h3>AUTHENTIC</h3>
            <p class="paragraph-large">
              Digitally sign your creation on LUV NFT permanently and verified
              through the blockchain.
            </p>
          </div>
          <div class="card-crystal">
            <h3>OWNERSHIP</h3>
            <p class="paragraph-large">
              Once you purchase your unique digital collectible, it's
              transferred and stored in your digital wallet.
            </p>
          </div>
        </div>
      </div>
      <img
        src="@/assets/Group 7337.png"
        data-w-id="270bdb76-810b-8881-d3ec-da63dc1a6097"
        style="
            -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0)
              skew(0, 0);
            opacity: 0;
          "
        alt=""
        class="blob-home-my-work"
      />
    </div>
    <div
      id="contact"
      data-w-id="7f1f1943-19a1-0d5c-f860-1d61242ddb06"
      class="section contact"
    >
      <div class="container-default w-container">
        <div class="w-layout-grid grid-contact">
          <div
            data-w-id="b772c3a0-1d8e-8e65-3655-0ef09e0028af"
            style="
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                opacity: 0;
              "
          >
            <h2>LET&#x27;S BUILD</h2>
            <p>
              We partner with the top brands, athlete's, and creators to bring
              you the hottest NFT drops.
            </p>
            <div class="mg-top-40px">
              <a
                data-w-id="d5e762ab-8110-c8df-d2dd-64c97fd682c2"
                href="mailto:contact@nfttemplate.webflow.io"
                class="link-wrapper w-inline-block"
              >
                <div>info@luvnft.com</div>
                <div class="underline-wrapper">
                  <div class="underline"></div>
                </div>
              </a>
            </div>
          </div>
          <div
            data-w-id="0d757a55-f01e-9273-fcf1-b04cb41a80be"
            style="
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
                  rotateZ(0) skew(0, 0);
                opacity: 0;
              "
            class="form-container"
          >
            <div class="form-background">
              <div class="w-form">
                <form
                  id="wf-form-Contact-Form"
                  name="wf-form-Contact-Form"
                  data-name="Contact Form"
                >
                  <div class="w-layout-grid grid-form">
                    <div>
                      <input
                        type="text"
                        class="input w-input"
                        style="background-color:#1400c6 !important;"
                        maxlength="256"
                        name="name"
                        data-name="Name"
                        placeholder="Full Name"
                        id="Name"
                        required=""
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        class="input w-input"
                        style="background-color:#1400c6 !important;"
                        maxlength="256"
                        name="Email"
                        data-name="Email"
                        placeholder="Email Address"
                        id="Email"
                        required=""
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        class="input w-input"
                        style="background-color:#1400c6 !important;"
                        maxlength="256"
                        name="Phone"
                        data-name="Phone"
                        placeholder="Your Website"
                        id="Phone"
                      />
                    </div>
                    <div>
                      <div class="select-container">
                        <select
                          id="Inquiry"
                          name="Inquiry"
                          data-name="Inquiry"
                          class="select w-select"
                        >
                          <option value="">Select Inquiry</option>
                          <option value="">Brand Partnership</option>
                          <option value="">Crypto Art</option>
                          <option value="">Music</option>
                          <option value="">Photography</option>
                          <option value="">Games</option>
                          <option value="">Domains</option>
                          <option value="">Event Fix</option>
                          <option value="">Other</option>
                        </select>
                      </div>
                    </div>
                    <div
                      id="w-node-_976f08fa-4bd7-5cb4-b53d-2187f5f1194b-0634c740"
                    >
                      <textarea
                        placeholder="Tell us more about you and what your creating?"
                        maxlength="5000"
                        id="Message"
                        name="Message"
                        data-name="Message"
                        class="text-area w-input"
                      ></textarea>
                    </div>
                    <div class="button-container contact">
                      <input
                        type="submit"
                        value="SEND MESSAGE"
                        data-wait="Please wait..."
                        class="button-primary full-width contact w-button"
                      />
                    </div>
                  </div>
                </form>
                <div class="card-crystal form-success w-form-done">
                  <div>
                    Thank you! Your submission has been received. We will
                    contact you soon.
                  </div>
                </div>
                <div class="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://assets.website-files.com/605a8ad8853d7fc62334c73e/605a9c8e59d1b810c572a570_blur-blob-nft-webflow-template.svg"
        loading="lazy"
        style="display:none;"
        alt=""
        class="blob-home-contact-two"
      />
      <img
        src="@/assets/Ellipse 140.png"
        style="opacity:0.54;"
        loading="lazy"
        alt=""
        class="blob-home-contact-one"
      />
      <img
        src="@/assets/briefcase(1) 1.png"
        loading="lazy"
        style="
            -webkit-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -moz-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            -ms-transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0)
              rotateZ(0) skew(0, 0);
            transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0)
              skew(0, 0);
            opacity: 0;
          "
        data-w-id="dc55fb1b-4d13-6f25-44e7-eb413a853a15"
        alt=""
        class="donuts contact-home"
      />
    </div>
    <footer data-w-id="1356e90d-e3a3-2953-9ae6-a897ae2f46c5" class="footer">
      <div class="container-default">
        <div class="footer-top">
          <div class="footer-top-left">
            <a
              href="/"
              aria-current="page"
              class="footer-logo-container w-inline-block w--current"
            >
              <img src="@/assets/logo.png" alt="" class="footer-logo" />
            </a>
            <ul role="list" class="footer-nav">
              <li class="footer-nav-item">
                <a
                  href="/"
                  aria-current="page"
                  class="nav-link footer w--current"
                  >HOME</a
                >
              </li>
              <!-- <li class="footer-nav-item">
                  <a href="/rmrk/mint" class="nav-link footer">MARKET</a>
                </li>
                <li class="footer-nav-item">
                  <a href="/rmrk/gallery" class="nav-link footer">GALLERY</a>
                </li> -->
              <li class="footer-nav-item">
                <a href="https://luvnft.medium.com/" class="nav-link footer"
                  >BLOG</a
                >
              </li>
              <li class="footer-nav-item">
                <a href="/#contact" class="nav-link footer">CONTACT</a>
              </li>
            </ul>
          </div>
          <div>
            <ul role="list" class="list-social-media">
              <li class="list-item-social-media">
                <a href="htts://twitter.com/luvnft"
                  ><i class="social-media-icon fab fa-twitter fa-lg"></i
                ></a>
              </li>
              <li class="list-item-social-media">
                <a href="https://www.tiktok.com/"
                  ><i class="social-media-icon fab fa-tiktok fa-lg"></i
                ></a>
              </li>
              <li class="list-item-social-media">
                <a href="https://www.instagram.com/luvnft"
                  ><i class="social-media-icon fab fa-instagram fa-lg"></i
                ></a>
              </li>
              <!-- <li class="list-item-social-media">
                  <a href="https://www.instagram.com/luvnft" class="social-media-icon"></a>
                </li> -->
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            © 💜 LUV NFT 2021
          </p>
        </div>
      </div>
    </footer>
  </div>

  <!--[if lte IE 9©
    ]><script src="//cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script
  ><![endif]-->
</template>

<script>
export default {
  name: 'HOME',
  methods: {
    onGalleryClick: function() {
      this.$router.push({ name: 'nft' });
    },
    onGalleryItemClick: function() {}
  },
  data() {
    return {
      isModalActive: false,
      nft: [
        {
          number: '0.5100 KSM',
          title: 'Crystal Card 1',
          avatar: 'images/home/critical-card-1.png',
          description: 'View NFT',
          underline: 'images/home/underline.png'
        },
        {
          number: '0.1019 KSM',
          title: 'Crystal Card 2',
          avatar: 'images/home/critical-card-2.png',
          description: 'View NFT',
          underline: 'images/home/underline.png'
        },
        {
          number: '0.6120 KSM',
          title: 'Crystal Card 3',
          avatar: 'images/home/critical-card-3.png',
          description: 'View NFT',
          underline: 'images/home/underline.png'
        }
      ],
      whyUs: [
        {
          title: 'GO DIGITAL',
          avatar: 'images/home/why-1.png',
          description:
            'Turn your customers or fans into patrons by selling your digital goodies. Money is going digital, shouldn’t your products?'
        },
        {
          title: 'NO MIDDLEMAN',
          avatar: 'images/home/why-2.png',
          description:
            'Buy and sell what you LUV without the middleman fees. A true rewarding heart-to-heart connection.'
        },
        {
          title: 'SPREAD LUV',
          avatar: 'images/home/why-3.png',
          description:
            'Once you purchase a digital collectible, such as crypto art, you can resell it in our secondary marketplace to other collectors.'
        }
      ],
      creators: {
        title: 'CREATORS',
        avatar: 'images/home/about-1.png',
        description:
          'We are looking for artists to empower the new creators economy. LUV NFT is still in early access, onboarding only a small number of hand-picked creators and LUV fluencers.'
      },
      aboutUs: [
        {
          title: 'CREATORS',
          avatar: 'images/home/about-1.png',
          description:
            'Ditigitally sign your work by creating a tokenized certificate using our blockchain technology. No longer will anyone profit on your trending creations.'
        }
        // {
        //   title: 'SHOWCASE YOUR LUV MAGIC',
        //   avatar: 'images/home/about-2.png',
        //   description:
        //     'Customize your profile to display your NFT collections, certified on the Polkadot blockchain, to patrons around the world. Crypto payments allow you to sell your digital goodies internationally. '
        // },
        // {
        //   title: 'A TRIBE OF CREATORS',
        //   avatar: 'images/home/about-3.png',
        //   description:
        //     'Only %1 of our tribe has ever received investor capital, therefore the remaining 99% of us will unite to invest in each other to build our future, blockchain by blockchain.'
        // }
      ]
    };
  }
};
</script>
