{
  type Video = {
    title: string;
    author: string;
    desc: string;
  };

  [1, 2].map((item) => item * item); //[1,4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; //for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]?: T[P];
  };
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hi",
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };

  animal.name = "ju";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "young",
  };
  // video.author = 'ju'; Error

  // cf. 재사용성 매우 낮음.
  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //     desc?: string;
  //   };

  //   type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  //     readonly desc: string;
  //   };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  //기존 value타입이거나, null이 가능.

  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    desc: null,
  };

  //
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
