import {
  ChimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ChimeClient";
import {
  GetVoiceConnectorStreamingConfigurationRequest,
  GetVoiceConnectorStreamingConfigurationResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1GetVoiceConnectorStreamingConfigurationCommand,
  serializeAws_restJson1_1GetVoiceConnectorStreamingConfigurationCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type GetVoiceConnectorStreamingConfigurationCommandInput = GetVoiceConnectorStreamingConfigurationRequest;
export type GetVoiceConnectorStreamingConfigurationCommandOutput = GetVoiceConnectorStreamingConfigurationResponse;

export class GetVoiceConnectorStreamingConfigurationCommand extends $Command<
  GetVoiceConnectorStreamingConfigurationCommandInput,
  GetVoiceConnectorStreamingConfigurationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: GetVoiceConnectorStreamingConfigurationCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetVoiceConnectorStreamingConfigurationCommandInput,
    GetVoiceConnectorStreamingConfigurationCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetVoiceConnectorStreamingConfigurationCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetVoiceConnectorStreamingConfigurationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput> {
    return deserializeAws_restJson1_1GetVoiceConnectorStreamingConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}