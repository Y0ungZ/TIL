{
  /**
   * Type Assertions π©
   */

  //ν­μ λ¬Έμμ΄μ λ¦¬ν΄νλ ν¨μ
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // result.length β anyνμμ΄λΌμ.

  //νμ§λ§ μ°λ¦¬λ λ¬Έμμ΄μ λ¦¬ν΄νλ ν¨μμΈ κ²μ μλ€.
  console.log((result as string).length);
  console.log((<string>result).length);

  //λ°λλ‘ λ¬Έμμ΄μ΄λΌκ³  μ₯λ΄νλλ°, μ«μλ₯Ό λ¦¬ν΄νλ€λ©΄?
  //undefined => μμμΉ λͺ»ν λ¬Έμ  λ°μ!
  //λ°λΌμ, μ λ§μ λ§ νμ€ν  λλ§ μ¬μ©.

  const wrong: any = 5;
  //console.log((wrong as Array<number>).push(1)); Error!

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers(); //μ«μ νΉμ undefined
  numbers!.push(2); //μ§μ§μ§μ§ μ₯λ΄ν΄. (!) <-> (?)

  //μ λ§ 100% μμ΄.
  const button = document.querySelector("class")!;

  //μμλλ©΄ μ’μ§λ§ μ‘°κΈ μνν  μ μλ€.
}
