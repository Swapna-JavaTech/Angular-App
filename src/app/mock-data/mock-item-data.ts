import { Item } from "../models/item";

export class MockData {
    public static Items : Item[]=[
        {
            itemId: 111,
            itemName : 'Rice',
            itemCategory : 'Grocery',
            itemPrice : 545,
            itemWeight : 10
        },
        {
            itemId: 121,
            itemName : 'Toor Dal',
            itemCategory : 'Grocery',
            itemPrice : 245,
            itemWeight : 2
        },
        {
            itemId: 131,
            itemName : 'Oil',
            itemCategory : 'Grocery',
            itemPrice : 845,
            itemWeight : 5
        },
        {
            itemId: 141,
            itemName : 'Ghee',
            itemCategory : 'Grocery',
            itemPrice : 545,
            itemWeight : 1
        },
    ]
}