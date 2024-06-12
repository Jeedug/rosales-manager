import { create } from "zustand";

const useAllNotes = create((set) => ({
  notes: [
    {
      name: "Timers",
      createdAt: "5 May 2023",
      data: [
        {
          type: "row",
          data: [
            {
              type: "paragraph",
              text: "hola",
              timer: "null",
              status: "null",
            },
            {
              type: "paragraph",
              text: "hola",
              timer: "null",
              status: "null",
            },
            {
              type: "paragraph",
              text: "hola",
              timer: "null",
              status: "null",
            },
            {
              type: "paragraph",
              text: "hola",
              timer: "null",
              status: "null",
            },
            {
              type: "title",
              text: "hola",
              timer: "null",
              status: "null",
            },
          ],
        },
        {
          type: "columnRow",
          data: [
            {
              type: "column",
              data: [
                {
                  type: "title",
                  text: "hello 1",
                  timer: "null",
                  status: "null",
                },
                {
                  type: "paragraph",
                  text: "hellos",
                  timer: "null",
                  status: "null",
                },
              ],
            },
            {
              type: "column",
              data: [
                {
                  type: "title",
                  text: "hello 1",
                  timer: "null",
                  status: "null",
                },
                {
                  type: "paragraph",
                  text: "hellos",
                  timer: "null",
                  status: "null",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Meetings",
      createdAt: "9 May 2023",
      data: [
        {
          type: "row",
          data: [
            {
              type: "paragraph",
              text: "hola",
              timer: "null",
              status: "null",
            },
            {
              type: "paragraph",
              text: "hola",
              timer: "null",
              status: "null",
            },
            {
              type: "paragraph",
              text: "hola",
              timer: "null",
              status: "null",
            },
            {
              type: "paragraph",
              text: "hola",
              timer: "null",
              status: "null",
            },
            {
              type: "title",
              text: "hola",
              timer: "null",
              status: "null",
            },
          ],
        },
        {
          type: "columnRow",
          data: [
            {
              type: "column",
              data: [
                {
                  type: "title",
                  text: "hello 1",
                  timer: "null",
                  status: "null",
                },
                {
                  type: "paragraph",
                  text: "hellos",
                  timer: "null",
                  status: "null",
                },
              ],
            },
            {
              type: "column",
              data: [
                {
                  type: "title",
                  text: "hello 1",
                  timer: "null",
                  status: "null",
                },
                {
                  type: "paragraph",
                  text: "hellos",
                  timer: "null",
                  status: "null",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  setNotes: (notes) => set({ notes }),
}));

export default useAllNotes;
