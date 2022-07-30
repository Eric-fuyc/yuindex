import { CommandType } from "../../command";

/**
 * cURL命令
 * @author Eric-fuyc
 */
const curlCommand: CommandType = {
  func: "curl",
  name: "发送HTTP请求",
  params: [
    {
      key: "url",
      desc: "请求的URL",
      required: false,
    },
  ],
  options: [
    {
      key: "fail",
      desc: "失败时静默",
      alias: ["f"],
      type: "boolean",
      required: false,
    },
    {
      key: "include",
      desc: "输出响应头",
      alias: ["i"],
      type: "boolean",
      required: false,
    },
    {
      key: "silent",
      desc: "安静模式",
      alias: ["s"],
      type: "boolean",
      required: false,
    },
    {
      key: "request",
      desc: "请求方法",
      alias: ["X"],
      type: "string",
      required: false,
    },
    {
      key: "header",
      desc: "自定义请求头",
      alias: ["H"],
      type: "string",
      required: false,
    },
  ],
  async action(options, terminal) {
    terminal.writeTextErrorResult("尚未实现")
  },
};

export default curlCommand;
