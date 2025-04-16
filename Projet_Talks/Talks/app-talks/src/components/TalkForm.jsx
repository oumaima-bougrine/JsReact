import React, { useEffect, useState } from "react";
import { useTalkStore } from "../store/talkStore";

export default function TalkForm() {
  const { addTalk, updateTalk, talkToEdit } = useTalkStore();
  const [form, setForm] = useState({
    id: null,
    title: "",
    subject: "",
    duration: "",
    speaker: "",
    objective: "",
  });

    useEffect(() => {
      if (talkToEdit) setForm(talkToEdit);
    }, [talkToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      updateTalk(form);
    } else {
    addTalk(form);
    }
    setForm({ id: null, title: "", subject: "", duration: "", speaker: "", objective: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-4 bg-white rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-emerald-400 pb-2">Nouveau Talk</h2>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Titre du talk"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
          <input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Sujet du talk"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Durée (min)</label>
          <input
            id="duration"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="Durée en minutes"
            type="number"
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Présentateur</label>
          <input
            id="speaker"
            name="speaker"
            value={form.speaker}
            onChange={handleChange}
            placeholder="Nom du présentateur"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Objectif</label>
          <textarea
            id="objective"
            name="objective"
            value={form.objective}
            onChange={handleChange}
            placeholder="Objectif du talk"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 !bg-emerald-700 hover:!bg-emerald-800 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors shadow-sm"
        >
          {form.id ? "Mettre à jour le Talk" : "Ajouter le Talk"}
        </button>
      </div>
    </form>
  );
}