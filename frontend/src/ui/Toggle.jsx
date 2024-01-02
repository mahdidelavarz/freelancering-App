import React from "react";
import { Switch } from "@headlessui/react";
function Toggle({toggleHandler , enabled , label}) {
  return (
    <Switch.Group>
      <div className="flex gap-x-3 items-center">
        <Switch.Label className="w-6">
          {label}
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={toggleHandler}
          className={`${
            enabled ? "bg-purple-900" : "bg-gray-400"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none `}
        >
          <span
            className={`${
              enabled ? "-translate-x-6" : "-translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}

export default Toggle;
