{
  type ToDo = {
    title: string;
    desc: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = "jaja"; //위험! 불변성 보장.
    //? optional
    //-? 꼭 있어야함.
  }
}
