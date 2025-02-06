"use strict";
{
    globalThis.C3.Plugins.Sparsha_copyclip.Acts = {
        Copy(Text)
        {
            var self = this;
            self.Input = document.createElement("input");
            self.Input.value = Text;
            document.getElementsByTagName('body')[0].appendChild(self.Input);
        },

        async ApiCopy(Text)
        {
            var self = this;
            window.focus();
            await navigator.clipboard.writeText(Text)
                .then(() => {
                self._trigger(self.CDNS.OnCopy);
            }).
            catch (err => {
                self.errorClipboard = err.message;
                self._trigger(self.CDNS.OnCopyError);
            });
        },

        async ApiGet()
        {
            var self = this;
            window.focus();
            await navigator.clipboard.readText()
                .then(Text => {
                self.GetText = Text;
                self._trigger(self.CDNS.OnGet);
            }).
            catch (err => {
                self.errorClipboard = err.message;
                self._trigger(self.CDNS.OnGetError);
            });
        },

        ClearError()
        {
            this.errorClipboard = "";
            //onErrorCopy = 0;
            //onErrorGet = 0;
        },

        InitCopy(buttonId)
        {
            var self = this;
            document.getElementById(buttonId).onclick = function()
            {
                setTimeout(function()
                {
                    self.Input.select();
                    document.execCommand("copy");
                    self.Input.remove();
                    self._trigger(self.CDNS.OnCopy1);
                }, 50);
            };

        }
    };
}