import {generatePassword} from "../utils/random.util";
export const car ={
    location: 'Haifa',
    manufacture: 'testMake',
    model: 'testModel',
    year: '2000',
    fuel: 'Diesel',
    seats: '2',
    carClass: 'testClass',
    serialNumber: generatePassword(),
    price: '1000.00',
    about: 'TestAbout',
    photo: 'testFiles/testphoto.jpg'


}