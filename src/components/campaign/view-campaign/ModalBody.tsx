"use client";

import { Campaign, EditCampaign } from "@/lib/types/campaign";
import {
  fetchLanguages,
  fetchVoices,
  selectOptions,
} from "@/utils/functions/campaign-api/fetchData";
import { Button } from "@mui/material";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import InputComponent from "../campaign-form/InputComponent";
import { updateCampaignData } from "@/utils/functions/campaign-api/campaign";

type ModalBodyProps = {
  campaign: Campaign;
  campaignId: string;
  handleClose: () => void;
};

const ModalBody: React.FC<ModalBodyProps> = ({
  campaign,
  campaignId,
  handleClose,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [languages, setLanguages] = useState<string[]>([]);
  const [voices, setVoices] = useState<string[]>([]);
  const fetchedLangData = useRef(false);
  const fetchedVoiceData = useRef(false);
  const [campaignDetails, setCampaignDetails] = useState<EditCampaign[]>([
    {
      value: campaign?.title,
      type: "text",
      name: "title",
      label: "Campaign Title",
    },
    { value: campaign?.voice, type: "select", name: "voice", label: "Voice" },
    {
      value: campaign?.language,
      type: "select",
      name: "language",
      label: "Language",
    },
    {
      value: campaign?.script,
      type: "textarea",
      name: "script",
      label: "Script",
    },
    {
      value: campaign?.purpose,
      type: "textarea",
      name: "purpose",
      label: "Purpose",
    },
    {
      value: campaign?.knowledgeBase,
      type: "textarea",
      name: "knowledgeBase",
      label: "Knowledge Base",
    },
    {
      value: campaign?.calendar,
      type: "datetime",
      name: "calendar",
      label: "Calendar",
    },
    {
      value: campaign?.firstLine,
      type: "text",
      name: "firstLine",
      label: "First Line",
    },
    { value: campaign?.tone, type: "text", name: "tone", label: "Tone" },
  ]);

  useEffect(() => {
    if (!fetchedLangData.current) {
      fetchLanguages(setLanguages);
      fetchedLangData.current = true;
    }
  }, []);

  useEffect(() => {
    if (!fetchedVoiceData.current) {
      fetchVoices(setVoices);
      fetchedVoiceData.current = true;
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCampaignDetails((prev) =>
      prev.map((detail) =>
        detail.name === name ? { ...detail, value: value } : detail
      )
    );
  };

  const onSaveEdits = async () => {
    await updateCampaignData(campaignId, campaignDetails);
    setEditMode(!editMode);
  };
  return (
    <div>
      {!editMode ? (
        <>
          <h1 className=" text-4xl mb-3 text-center font-bold">
            Campaign Details
          </h1>
          <div className="flex flex-col space-y-3 py-3">
            {campaignDetails.map((detail, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-base font-semibold ">
                  {detail.label || "NA"}:
                </span>
                <span className=" text-xs font-medium text-gray-300">
                  {detail.value || "N/A"}
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className=" text-4xl mb-3 text-center font-bold">Edit Details</h1>
          <div className="flex flex-col space-y-3 py-3">
            {campaignDetails.map((input, index) => (
              <InputComponent
                key={index}
                label={input?.label}
                name={input?.name}
                value={`${input?.value}`}
                onChange={handleChange}
                type={input?.type}
                options={selectOptions(input?.name, languages, voices)}
              />
            ))}
          </div>
        </>
      )}
      <div className="w-full flex flex-row justify-between">
        {editMode ? (
          <Button onClick={onSaveEdits}>Save</Button>
        ) : (
          <Button onClick={() => setEditMode(!editMode)}>Edit</Button>
        )}

        <Button onClick={handleClose}>Close</Button>
      </div>
    </div>
  );
};

export default ModalBody;
