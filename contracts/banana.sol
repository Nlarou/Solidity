// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Banana {
    string private id;
    int256 private price;
    int256 private quantity;

    constructor(
        string memory _id,
        int256 _price,
        int256 _quantity
    ) public {
        id = _id;
        price = _price;
        quantity = _quantity;
    }

    function getId() public view returns (string memory) {
        return id;
    }

    function getPrice() public view returns (int256) {
        return price;
    }

    function getQuantity() public view returns (int256) {
        return quantity;
    }

    function setPrice(int256 _price) public {
        price = _price;
    }

    function setQuantity(int256 _quantity) public {
        quantity = _quantity;
    }
}
