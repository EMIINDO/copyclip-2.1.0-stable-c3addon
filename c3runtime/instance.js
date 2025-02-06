"use strict";
{
    // Porting BY EMI INDO with c3addon-ide-plus
    globalThis.C3.Plugins.Sparsha_copyclip.Instance = class copyclipInstance extends globalThis.ISDKInstanceBase
    {
        constructor()
        {
            super();

            const properties = this._getInitProperties();
            if (properties)
            {}
            //var textToCopy = "";
            //if (typeof document != "undefined") var Input = document.createElement("input");

            this.errorClipboard = null;
            this.GetText = "";
            this.Input = null;

            this.CDNS = globalThis.C3.Plugins.Sparsha_copyclip.Cnds;
        }

        _release()
        {
            super._release();
        }

        _saveToJson()
        {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o)
        {
            // load state for savegames
        }

        /* 
GetDebuggerProperties() {
    return [

            {
                title: "copyclip",
                properties: [
                    //{name: ".current-animation",	value: this._currentAnimation.GetName(),	onedit: v => this.CallAction(Acts.SetAnim, v, 0) },
                ]
            }
    ];
} */
    };
}