import React, { useState } from "react";
import "./CardComponent.css";

const CardComponent = () => {
    const [number, setNumber] = useState(() => {
        const temp = new Array(16);
        temp.fill("#");
        return temp;
    });
    let inputNumber;
    const [holder, setHolder] = useState("FULL NAME");
    const [date, setDate] = useState(["MM", "YY"]);

    const rewriteNumber = (inputNumber) => {
        const temp = new Array(16);
        temp.fill("#");
        setNumber(temp);
        inputNumber = Array.from(String(inputNumber), Number);
        for (let i = 0; i < inputNumber.length; i++) temp[i] = inputNumber[i];
        setNumber(temp);
    };

    const rewriteHolder = (Name) => {
        if (Name === "") setHolder("FULL NAME");
        else setHolder(Name.toUpperCase());
    };

    const rewriteMonth = (Month) => {
        if (Month === "default") setDate(["MM", "YY"]);
        else setDate([Month, date[1]]);
    };

    const rewriteYear = (Year) => {
        if (Year === "default") setDate(["MM", "YY"]);
        setDate([date[0], Year % 100]);
    };

    return (
        <div className="main_menu">
            <div className="card_background">
                <div className="card">
                    <div className="card_top"></div>
                    <div className="card_center">
                        <label htmlFor="card_number">
                            <div className="card_number">
                                <div className="number">{number[0]}</div>
                                <div className="number">{number[1]}</div>
                                <div className="number">{number[2]}</div>
                                <div className="number">{number[3]}</div>
                                <div className="void_number"></div>
                                <div className="number">{number[4]}</div>
                                <div className="number">{number[5]}</div>
                                <div className="number">{number[6]}</div>
                                <div className="number">{number[7]}</div>
                                <div className="void_number"></div>
                                <div className="number">{number[8]}</div>
                                <div className="number">{number[9]}</div>
                                <div className="number">{number[10]}</div>
                                <div className="number">{number[11]}</div>
                                <div className="void_number"></div>
                                <div className="number">{number[12]}</div>
                                <div className="number">{number[13]}</div>
                                <div className="number">{number[14]}</div>
                                <div className="number">{number[15]}</div>
                            </div>
                        </label>
                    </div>
                    <div className="card_bottom">
                        <div className="card_holder">
                            <label htmlFor="card_holder">
                                <span className="card_font">Card Holder</span>
                                <br />
                                <span>{holder}</span>
                            </label>
                        </div>
                        <div className="card_date">
                            <span className="card_font">Expires </span>
                            <br />
                            <label htmlFor="card_holder_month">
                                <span>{date[0]}</span>
                            </label>
                            /
                            <label htmlFor="card_holder_year">
                                <span>{date[1]}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="back">
                <div className="input_card">
                    <div className="input_card_name">
                        <label htmlFor="card_number">
                            <div>Card Number</div>
                            <input
                                className="input"
                                id="card_number"
                                type="text"
                                maxLength={16}
                                value={inputNumber}
                                onChange={(event) => {
                                    event.target.value =
                                        event.target.value.replace(
                                            /[^0-9]/,
                                            ""
                                        );
                                    rewriteNumber(event.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div className="input_card_holder">
                        <label htmlFor="card_holder">
                            <div>Card Holder</div>
                            <input
                                className="input"
                                id="card_holder"
                                type="text"
                                maxLength={36}
                                onChange={(event) => {
                                    rewriteHolder(event.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div className="input_row">
                        <div className="input_card_date">
                            <div>Expiration date</div>
                            <div className="select_case">
                                <label htmlFor="card_holder_month">
                                    <select
                                        className="select_case"
                                        id="card_holder_month"
                                        onChange={(event) =>
                                            rewriteMonth(event.target.value)
                                        }
                                    >
                                        <option
                                            value
                                            disabled="disabled"
                                            selected="selected"
                                        >
                                            Month
                                        </option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </label>
                            </div>
                            <div className="select_case">
                                <label htmlFor="card_holder_year">
                                    <select
                                        className="select_case"
                                        id="card_holder_year"
                                        onChange={(event) =>
                                            rewriteYear(event.target.value)
                                        }
                                    >
                                        <option
                                            value
                                            disabled="disabled"
                                            selected="selected"
                                        >
                                            Year
                                        </option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                        <option value="2031">2031</option>
                                        <option value="2032">2032</option>
                                        <option value="2033">2033</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="input_card_cvv">
                            <div>CVV</div>
                            <input
                                className="input"
                                type="password"
                                maxLength={4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
