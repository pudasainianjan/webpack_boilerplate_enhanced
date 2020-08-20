import str from './models/Search';
//3 ways to import:
// import {add,multiply,ID} from './view/searchView';
//**wee could also us different name in above like this:
// import {add as a,multiply as m,ID} from './view/searchView';
import * as searchView from './view/searchView';


//console.log(`using imported functions! ${add(ID,2)} and ${multiply(3,5)}...${str}`);
//console.log(`using imported functions! ${a(ID,2)} and ${m(3,5)}...${str}`);
const ID = searchView.ID;
console.log(`using imported functions! ${searchView.add(ID,2)} and ${searchView.multiply(3,5)}...${str}`);
