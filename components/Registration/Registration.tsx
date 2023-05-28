import { useState } from "react";
import { IconSquareArrowRight } from "@tabler/icons-react";

export default function Registration() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [userLevel, setUserLevel] = useState<string | null>(null);
  const [wanikaniLevel, setWanikaniLevel] = useState<string | null>(null);

  const handleLevelChange = (level: string) => {
    setUserLevel(level);
  };

  const handleWanikaniLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWanikaniLevel(event.target.value);
  };

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleSubmit = () => {
    if (apiKey) localStorage.setItem("apiKey", apiKey);
    if (userLevel) localStorage.setItem("currentJlptLevel", userLevel);
    if (wanikaniLevel) localStorage.setItem("currentWanikaniLevel", wanikaniLevel);
  };

  const levelOptions = [
    "Know Hiragana/Katakana",
    "Passed N5",
    "Passed N4",
    "Passed N3",
    "Passed N2",
  ];

  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Welcome
          </h1>
          <p className="mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            This website is used for learning Japanese. We just need to learn more
            about you! Not associated with OpenAI or Wanikani.
          </p>

          <div className="mt-12 space-y-4 flex ">
            {levelOptions.map((level) => (
              <div key={level} className="w-1/5">
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-semibold text-white">
                    {level}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-4 flex">
            {/* wanikani level */}
            <label className="text-2xl leading-6 font-semibold text-white mx-6">
              What is your WaniKani level?
              <input
                type="number"
                value={wanikaniLevel || ""}
                onChange={handleWanikaniLevelChange}
                className="mt-2 block w-full rounded-md py-2 text-sm font-semibold text-black text-center"
              />
            </label>
            {/* apiKey */}
            <label className="text-2xl leading-6 font-semibold text-white mx-6">
              Please provide your OpenAI API Key:
              <input
                type="text"
                className="mt-2 block w-full rounded-md py-2 text-sm font-semibold text-black text-center"
                value={apiKey || ""}
                onChange={handleApiKeyChange}
              />
              <p className="mt-2 text-zinc-300">We won't save your API key.</p>
            </label>
          </div>

          {/* ready button */}
          <div className="flex justify-end mt-6">
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none"
              onClick={handleSubmit}
            >
              Ready
              <IconSquareArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
