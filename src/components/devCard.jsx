import React from "react";

export const DevCard = () => {
  return (
    <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
      <div className="flex items-center gap-4">
        <img
          alt="Developer"
          src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-medium text-white">Claire Mac</h3>

          <div className="flow-root">
            <ul className="-m-1 flex flex-wrap">
              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300">
                  {" "}
                  Twitter{" "}
                </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" class="text-xs font-medium text-gray-300">
                  {" "}
                  GitHub{" "}
                </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300">
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        <li>
          <a
            href="#"
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
          >
            <strong className="font-medium text-white">Project A</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              consequuntur deleniti, unde ab ut in!
            </p>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
          >
            <strong className="font-medium text-white">Project B</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              cumque saepe sit.
            </p>
          </a>
        </li>
      </ul>
    </article>
  );
};
