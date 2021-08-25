{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'youngju';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'youngju',
        age: 1,
    };

    /**
     * String Literal Types
     */
    type Name = 'name';
    let youngName: Name;
    youngName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';
    
    type Boal = true;
    const isCat: Boal = true;
    
}