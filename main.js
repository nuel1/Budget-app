// This project soure code is free for
// for use by anyone...

(function () {
  "use strict";

  // Building page startup
  !(function (t) {
    function pageloader(end) {
      if (end) model.call(t);
    }

    function model(end) {
      if (end) {
        return end();
      } else {
        setTimeout(() => {
          pageloader(false);
          this.loaderBox.classList.add("fadeOut");
        }, 2000);

        setTimeout(() => {
          this.loaderBox.classList.add("display-n");
          this.modelHolder.classList.replace("display-n", "display-b");
        }, 2405);

        setTimeout(() => {
          this.modelHolder.classList.replace("fadeOut", "fadeIn");
        }, 2407);

        setTimeout(() => {
          this.modelBox.classList.replace(
            "m-adjustUpward",
            "m-default-position"
          );
        }, 2417);

        setTimeout(() => {
          this.modelBox.classList.add("fadeIn");
        }, 2517);
      }
    }

    model.call(t);

    function closeModel() {
      const model = document.querySelector(".model-wrapper");
      model.classList.replace("fadeIn", "fadeOut");
      setTimeout(() => {
        model.classList.replace("display-b", "display-n");
      }, 401);
    }

    function close_M_OnClick() {
      const modelBtn = document.querySelector(".close-m");
      modelBtn.addEventListener("click", () => {
        model(closeModel);
        runMainContent();
      });
    }

    close_M_OnClick();

    function runMainContent() {
      // Animation for slides
      (function (c) {
        setTimeout(() => {
          c.mainWrapper.classList.replace("display-n", "display-b");
          c.animationA();
          c.animationB();
        }, 10);
      })({
        mainWrapper: document.querySelector(".main"),

        animationA() {
          const animationElement = {
            cards: [...document.querySelectorAll(".card")],
          };

          setTimeout(() => {
            animationElement.cards[0].classList.replace(
              "display-n",
              "display-b"
            );
          }, 0);
          setTimeout(() => {
            animationElement.cards[0].classList.replace("toLeft", "toRight");
            animationElement.cards[1].classList.replace(
              "display-n",
              "display-b"
            );
          }, 50);

          setTimeout(() => {
            animationElement.cards[1].classList.replace("toLeft", "toRight");
          }, 150);

          setTimeout(() => {
            animationElement.cards[0].classList.replace("fadeOut", "fadeIn");
          }, 100);

          setTimeout(() => {
            animationElement.cards[1].classList.replace("fadeOut", "fadeIn");
          }, 300);
        },

        animationB() {
          const animationElement = {
            section: document.querySelector(".col-2-row-1"),
            sectionHeader: document.querySelector(".col-2-row-1 header"),
            sectionFooter: document.querySelector(".col-2-row-1 footer"),
            imgBoxes: [...document.querySelectorAll(".img-box")],
            bgImg: document.querySelector(".bg-img-box"),
          };

          function animationPhaseOne() {
            setTimeout(() => {
              animationElement.section.classList.replace(
                "display-n",
                "display-b"
              );
            }, 100);
            setTimeout(() => {
              animationElement.section.classList.replace("toTop", "toBottom");
            }, 305);
            setTimeout(() => {
              animationElement.section.classList.replace("fadeOut", "fadeIn");
            }, 350);
          }

          function animationPhaseTwo() {
            setTimeout(() => {
              animationElement.sectionHeader.classList.replace(
                "toLeft",
                "toRight"
              );
            }, 900);
            setTimeout(() => {
              animationElement.sectionFooter.classList.replace(
                "toLeft",
                "toRight"
              );
            }, 950);
            setTimeout(() => {
              animationElement.sectionHeader.classList.replace(
                "fadeOut",
                "fadeIn"
              );
            }, 1000);
            setTimeout(() => {
              animationElement.sectionFooter.classList.replace(
                "fadeOut",
                "fadeIn"
              );
            }, 1050);
          }

          function animationPhaseThree() {
            setTimeout(() => {
              animationElement.imgBoxes[0].classList.replace(
                "shrink",
                "popOut"
              );
            }, 1350);
            setTimeout(() => {
              animationElement.imgBoxes[1].classList.replace(
                "shrink",
                "popOut"
              );
            }, 1550);
            setTimeout(() => {
              animationElement.imgBoxes[2].classList.replace(
                "shrink",
                "popOut"
              );
            }, 1750);
            setTimeout(() => {
              animationElement.bgImg.classList.replace("fadeOut", "fadeIn");
            }, 2200);
          }
          animationPhaseOne();
          animationPhaseTwo();
          animationPhaseThree();
        },
      });
    }
  })({
    loaderBox: document.querySelector(".page-loader-wrapper"),
    modelHolder: document.querySelector(".model-wrapper"),
    modelBox: document.querySelector(".m-box"),
  });

  (function () {
    // Focus and blur event can only be used
    // on form elements therefore event delegation is
    // not suitable.

    function onfocus(e) {
      const e_parent = e.target.parentNode;
      const input_title = [...e_parent.children].filter((e) =>
        e.classList.contains("input-title")
      );
      input_title[0].children[0].classList.replace("zoomIn", "zoomOut");
    }

    function onblur(e) {
      const e_parent = e.target.parentNode;
      const input_title = [...e_parent.children].filter((e) =>
        e.classList.contains("input-title")
      );
      input_title[0].children[0].classList.replace("zoomOut", "zoomIn");
      return {
        inputTitleText: input_title[0].children[0].textContent,
        inputTitle: input_title[0].children[0],
      };
    }

    const inputs = document.querySelectorAll("#input");
    [...inputs].forEach((input) => {
      input.addEventListener("focus", (e) => {
        onfocus(e);
      });
      input.addEventListener("blur", (e) => {
        if (input.value) {
          onfocus(e);
        } else {
          onblur(e);
        }
      });
    });

    !(function (b, e, r, z) {
      //

      const replaceWith = (blankBox, span) => {
        if (blankBox.classList.contains("display-b")) {
          blankBox.classList.replace("fadeIn", "fadeOut");
          setTimeout(() => {
            blankBox.classList.replace("display-b", "display-n");
            span.classList.replace("display-n", "display-b");
            span.classList.replace("fadeOut", "fadeIn");
          }, 401);
        }
      };

      const budgetBlock = () => {
        const span = document.querySelector(".b-val");
        const blankBox = document.querySelector(".b-box");
        const input = document.forms[0].budget;
        const e_amt = document.querySelector(".e-val");
        const balance = document.querySelector(".bb-val");

        if (b.call(z, input)) {
          replaceWith(blankBox, span);
          span.textContent = b.call(z, input).str;
          if (e_amt.textContent) {
            let budgetVal = span.textContent;
            let expensesVal = e_amt.textContent;
            const balance_BlankBox = document.querySelector(".bb-box");

            // b.call(z, input).str returns a string containing
            // a dollar sign in front. but could cause an error if
            // passed to another function as argument, whose parameter is returned as
            // a number. Therfore, in other to avoid error, remove dollar
            // sign in from of strings which was assigned to expensesVal.
            expensesVal = expensesVal.split("");
            expensesVal.shift();
            expensesVal = expensesVal.join("");

            balance.textContent = `$${
              r(z, getTotalBalanceFromBudgetVal, null, budgetVal).noDollarPad -
              Number(expensesVal)
            }`;
            replaceWith(balance_BlankBox, balance);
          }
        } else {
          b.call(z, input);
        }
      };

      const expenses = (n) => {
        expenses.cache = expenses.cache || {};
        let propertyAvailability = 0;

        for (let property in expenses.cache) {
          if (property === "value") propertyAvailability++;
        }

        if (propertyAvailability) {
          expenses.cache.value = expenses.cache.value + n;
        } else {
          expenses.cache.value = n;
        }

        return expenses.cache.value;
      };

      const itemTray = () => {
        const ul = document.querySelector(".e-list");

        const emptyTray = () => {
          const span = document.querySelector(".e-checker");
          const div = document.querySelector(".r-img-wrapper");

          ul.classList.replace("display-b", "display-n");
          span.classList.replace("display-n", "display-b");
          div.classList.replace("display-n", "display-b");
        };

        if (!ul.children.length) {
          emptyTray();
        }
      };

      const expensesBuilder = () => {
        const ul = document.querySelector(".e-list");
        const li = document.createElement("li");
        const div_col1 = document.createElement("div");
        const div_col2 = document.createElement("div");
        const div_eName = document.createElement("div");
        const div_eAmt = document.createElement("div");
        const Btn = document.createElement("button");
        const eName_SPAN = document.createElement("span");

        // Elements displayed if item tray is empty
        const span__forEmptyTray = document.querySelector(".e-checker");
        const div__forEmptyTray = document.querySelector(".r-img-wrapper");

        div_col1.className = "flex-col-1";
        div_col2.className = "flex-col-2";
        div_eName.className = "e-name";
        div_eAmt.className = "e-amount";
        Btn.className = "del-btn";

        div_col1.appendChild(div_eName);
        div_col1.appendChild(div_eAmt);
        div_col2.appendChild(Btn);

        li.appendChild(div_col1);
        li.appendChild(div_col2);

        const input_eName = document.forms[1].expenses;
        const input_eAmount = document.forms[1].amount;

        if (e().addExpenses.call(z, input_eName, input_eAmount)) {
          ul.appendChild(li);
          ul.classList.replace("display-n", "display-b");
          span__forEmptyTray.classList.add("display-n");
          div__forEmptyTray.classList.add("display-n");

          const span = document.querySelector(".e-val");
          const blankBox = document.querySelector(".e-box");

          div_eName.textContent = input_eName.value;
          div_eAmt.textContent = e().addExpenses.call(
            z,
            input_eName,
            input_eAmount
          ).str;
          div_eName.appendChild(eName_SPAN);
          Btn.textContent = "Delete";

          replaceWith(blankBox, span);

          const newValToString = expenses(
            e().addExpenses.call(z, input_eName, input_eAmount).int
          );
          span.textContent = `$${newValToString}`;

          const span_Budget = document.querySelector(".b-val");

          if (span_Budget.textContent) {
            const balance = document.querySelector(".bb-val");
            const balance_BlankBox = document.querySelector(".bb-box");
            const budgetVal = span_Budget.textContent;

            balance.textContent = `$${
              r(z, null, subExpenseFromBudgetVal, budgetVal).noDollarPad -
              newValToString
            }`;
            replaceWith(balance_BlankBox, balance);
          }
        } else {
          e().addExpenses.call(z, input_eName, input_eAmount);
        }
      };

      const delItem = (event) => {
        const getTargetAmt = (target) => {
          const parentDiv = target.parentNode.previousElementSibling;
          const elArr = [];

          [...parentDiv.children].forEach((e) => {
            if (e.className === "e-amount") elArr.push(e);
          });

          return elArr;
        };

        if (event.target.className === "del-btn") {
          const span = document.querySelector(".e-val");
          const newValToString = expenses(
            -e().delExepenses.call(z, event.target)
          );

          const balance = document.querySelector(".bb-val");

          let deletedExpenses = getTargetAmt(event.target)[0].textContent;
          deletedExpenses = deletedExpenses.split("");
          deletedExpenses.shift();
          deletedExpenses = deletedExpenses.join("");

          let balance_Txt = balance.textContent;
          balance_Txt = balance_Txt.split("");
          balance_Txt.shift();
          balance_Txt = balance_Txt.join("");

          balance.textContent = `$${
            Number(balance_Txt) + Number(deletedExpenses)
          }`;
          span.textContent = `$${newValToString}`;
        }
      };

      function getTotalBalanceFromBudgetVal(n) {
        return Number(this.removeDollarSignInStr(n));
      }

      function subExpenseFromBudgetVal(n) {
        return Number(this.removeDollarSignInStr(n));
      }

      const del = () => {
        const ul = document.querySelector(".e-list");
        ul.addEventListener("click", (e) => {
          delItem(e);
          setTimeout(() => {
            itemTray();
          }, 500);
        });
      };

      const add = () => {
        const btn = document.querySelector(".add-btn");
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          expensesBuilder();
        });
      };

      const cal = () => {
        const btn = document.querySelector(".cal-btn");
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          budgetBlock();
        });
      };

      cal();
      add();
      del();
    })(
      function (b) {
        if (this.validation(b)) {
          if (this.validation(b).state) {
            const stringified = this.dolloarSignPadStart(b.value);

            return {
              str: stringified,
              int: Number(b.value),
            };
          } else {
            this.validation(b);
            this.validation(b).error();
          }
        }
      },
      function () {
        return {
          addExpenses(...e) {
            if (this.validation(...e)) {
              if (this.validation(...e).state) {
                const stringified = this.dolloarSignPadStart(e[1].value);
                return {
                  str: stringified,
                  int: Number(e[1].value),
                };
              } else {
                this.validation(...e);
                this.validation(...e).error();
              }
            }
          },

          delExepenses(n) {
            const e_amtInStr =
              n.parentNode.previousElementSibling.children[1].textContent;
            const e_amtInInt = Number(this.removeDollarSignInStr(e_amtInStr));

            const delAnimation = () => {
              const e_name = n.parentNode.previousElementSibling.children[0];
              const li = n.parentNode.parentNode;

              const ul = document.querySelector(".e-list");

              e_name.children[0].style.transform = "translate(0)";
              const arr = [...ul.children];

              setTimeout(() => {
                ul.children[arr.indexOf(li)].remove();
              }, 420);
            };

            delAnimation();

            return e_amtInInt;
          },
        };
      },
      function (z, p, n, i) {
        if (p) {
          return {
            dollarPad: p.apply(z, [i]),
            noDollarPad: p.apply(z, [i]),
          };
        }
        if (n) {
          return {
            dollarPad: n.apply(z, [i]),
            noDollarPad: n.apply(z, [i]),
          };
        }
      },
      {
        removeDollarSignInStr(str) {
          const removeDollarPad = str.split("");
          removeDollarPad.splice(0, 1);
          return removeDollarPad.join("");
        },

        dolloarSignPadStart(str) {
          const dollarPaddedStr = str.split("");
          dollarPaddedStr.unshift("$");
          return dollarPaddedStr.join("");
        },

        validation(...arg) {
          const validate = (args, n) => {
            const placeHolderNames = {
              b: "Budget",
              a: "Amount",
            };

            const e = (i, v, p) => {
              if (Number(i.value) || Number(i.value) <= 0) {
                v[0].children[0].textContent = p;

                if (v[0].children[0].classList.contains("error")) {
                  v[0].children[0].classList.remove("error");
                }

                return {
                  state: true,
                };
              } else {
                v[0].children[0].textContent = "Invalid Input. Numbers only";
                v[0].children[0].classList.add("error");

                return {
                  error() {
                    throw new TypeError(
                      "Input value should contain only numbers"
                    );
                  },
                  state: false,
                };
              }
            };

            if (n > 0) {
              return function () {
                if (args[0].value && args[n].value) {
                  const e_parent = args[n].parentNode;
                  const input_title = [...e_parent.children].filter((e) =>
                    e.classList.contains("input-title")
                  );
                  return e(args[n], input_title, placeHolderNames.a);
                } else {
                  return;
                }
              };
            } else {
              return function () {
                if (args[n].value.length) {
                  const e_parent = args[n].parentNode;
                  const input_title = [...e_parent.children].filter((e) =>
                    e.classList.contains("input-title")
                  );
                  return e(args[n], input_title, placeHolderNames.b);
                } else {
                  return;
                }
              };
            }
          };

          if (arg.length > 1) {
            const result = validate(arg, 1);
            return result();
          } else {
            const result = validate(arg, 0);
            return result();
          }
        },
      }
    );
  })();
})();
