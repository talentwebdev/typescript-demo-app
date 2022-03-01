# typescript-demo-app
Typescript demo application.
[Source](https://www.youtube.com/watch?v=BwuLxPH8IDsV) - Alexander

! - Type casting
+ [variable] - Type cast to number

## Types
**number**: 1, 5.3, -10 ...
**string**: 'Hi', "HI", `Hi`
**boolean**: true, false
**object**:
**Array**
**any** 
```typescript
let favoriteActivites: any[];
favoriteActivites = ['Sports', 1];
```
**Tuple**: fiexd-length array
**Enum**: enum { NEW, OLD }
**FUnction Type**:
```typescript
let function : Function;
let combineValues: (a: number, b: number) => number;
```
**unknown type**:
```typescript
let userInput: unknown;
userInput = 5;
userInput = 'Max';
let userName: string;
userName = userInput; // error
```

```typescript
let userInput: any;
userInput = 5;
userInput = 'Max';
let userName: string;
userName = userInput; // no error
```


**Union Type**: number | string, 'as-number' | 'as-text'

**Define New Type**: 
```typescript
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
```

**Define function return type**:
```typescript
function add(n1: number, n2: number) : string { 
    return n1 + n2;
}
function add(n1: number, n2: number) : void { 
    console.log(n1 + n2);
}
```

**Undefined value type**: 
```typescript
let someValue: undefined;
```

**Difference between void and undefined return types for functions**
```typescript
function printResult(num: number): void {
    console.log('result');
}
function printResult(num: number): undefined {
    return ;
}
```

**Generate Error**:
```typescript
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}
```

**What source .map files do?**
It act as bridge to connect ts file to js file in modern web browser dev tools.
It's super convenient in debugging typescript code in the browser. 


## Typescript CLI commands
**Compile single file**
```
tsc [file]
```
**Init TS**
```
tsc init
```
This will create tsconfig.json.
**Run in watch mode**
```
tsc -w
```