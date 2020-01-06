import {
  AssociateDeviceWithPlacementCommandInput,
  AssociateDeviceWithPlacementCommandOutput
} from "../commands/AssociateDeviceWithPlacementCommand";
import {
  CreatePlacementCommandInput,
  CreatePlacementCommandOutput
} from "../commands/CreatePlacementCommand";
import {
  CreateProjectCommandInput,
  CreateProjectCommandOutput
} from "../commands/CreateProjectCommand";
import {
  DeletePlacementCommandInput,
  DeletePlacementCommandOutput
} from "../commands/DeletePlacementCommand";
import {
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput
} from "../commands/DeleteProjectCommand";
import {
  DescribePlacementCommandInput,
  DescribePlacementCommandOutput
} from "../commands/DescribePlacementCommand";
import {
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput
} from "../commands/DescribeProjectCommand";
import {
  DisassociateDeviceFromPlacementCommandInput,
  DisassociateDeviceFromPlacementCommandOutput
} from "../commands/DisassociateDeviceFromPlacementCommand";
import {
  GetDevicesInPlacementCommandInput,
  GetDevicesInPlacementCommandOutput
} from "../commands/GetDevicesInPlacementCommand";
import {
  ListPlacementsCommandInput,
  ListPlacementsCommandOutput
} from "../commands/ListPlacementsCommand";
import {
  ListProjectsCommandInput,
  ListProjectsCommandOutput
} from "../commands/ListProjectsCommand";
import {
  UpdatePlacementCommandInput,
  UpdatePlacementCommandOutput
} from "../commands/UpdatePlacementCommand";
import {
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput
} from "../commands/UpdateProjectCommand";
import {
  DeviceTemplate,
  InternalFailureException,
  InvalidRequestException,
  PlacementDescription,
  PlacementSummary,
  PlacementTemplate,
  ProjectDescription,
  ProjectSummary,
  ResourceConflictException,
  ResourceNotFoundException,
  TooManyRequestsException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1AssociateDeviceWithPlacementCommand(
  input: AssociateDeviceWithPlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}";
  if (input.deviceTemplateName !== undefined) {
    const labelValue: any = input.deviceTemplateName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: deviceTemplateName."
      );
    }
    resolvedPath = resolvedPath.replace("{deviceTemplateName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: deviceTemplateName."
    );
  }
  if (input.placementName !== undefined) {
    const labelValue: any = input.placementName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: placementName."
      );
    }
    resolvedPath = resolvedPath.replace("{placementName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: placementName.");
  }
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.deviceId !== undefined) {
    bodyParams["deviceId"] = input.deviceId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreatePlacementCommand(
  input: CreatePlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/projects/{projectName}/placements";
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_restJson1_1PlacementAttributeMap(
      input.attributes,
      context
    );
  }
  if (input.placementName !== undefined) {
    bodyParams["placementName"] = input.placementName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateProjectCommand(
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/projects";
  let body: any = {};
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.placementTemplate !== undefined) {
    bodyParams["placementTemplate"] = serializeAws_restJson1_1PlacementTemplate(
      input.placementTemplate,
      context
    );
  }
  if (input.projectName !== undefined) {
    bodyParams["projectName"] = input.projectName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeletePlacementCommand(
  input: DeletePlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/projects/{projectName}/placements/{placementName}";
  if (input.placementName !== undefined) {
    const labelValue: any = input.placementName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: placementName."
      );
    }
    resolvedPath = resolvedPath.replace("{placementName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: placementName.");
  }
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteProjectCommand(
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/projects/{projectName}";
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribePlacementCommand(
  input: DescribePlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/projects/{projectName}/placements/{placementName}";
  if (input.placementName !== undefined) {
    const labelValue: any = input.placementName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: placementName."
      );
    }
    resolvedPath = resolvedPath.replace("{placementName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: placementName.");
  }
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeProjectCommand(
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/projects/{projectName}";
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DisassociateDeviceFromPlacementCommand(
  input: DisassociateDeviceFromPlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}";
  if (input.deviceTemplateName !== undefined) {
    const labelValue: any = input.deviceTemplateName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: deviceTemplateName."
      );
    }
    resolvedPath = resolvedPath.replace("{deviceTemplateName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: deviceTemplateName."
    );
  }
  if (input.placementName !== undefined) {
    const labelValue: any = input.placementName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: placementName."
      );
    }
    resolvedPath = resolvedPath.replace("{placementName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: placementName.");
  }
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDevicesInPlacementCommand(
  input: GetDevicesInPlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/projects/{projectName}/placements/{placementName}/devices";
  if (input.placementName !== undefined) {
    const labelValue: any = input.placementName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: placementName."
      );
    }
    resolvedPath = resolvedPath.replace("{placementName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: placementName.");
  }
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListPlacementsCommand(
  input: ListPlacementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/projects/{projectName}/placements";
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListProjectsCommand(
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/projects";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdatePlacementCommand(
  input: UpdatePlacementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/projects/{projectName}/placements/{placementName}";
  if (input.placementName !== undefined) {
    const labelValue: any = input.placementName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: placementName."
      );
    }
    resolvedPath = resolvedPath.replace("{placementName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: placementName.");
  }
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_restJson1_1PlacementAttributeMap(
      input.attributes,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateProjectCommand(
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/projects/{projectName}";
  if (input.projectName !== undefined) {
    const labelValue: any = input.projectName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: projectName."
      );
    }
    resolvedPath = resolvedPath.replace("{projectName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: projectName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.placementTemplate !== undefined) {
    bodyParams["placementTemplate"] = serializeAws_restJson1_1PlacementTemplate(
      input.placementTemplate,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1AssociateDeviceWithPlacementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDeviceWithPlacementCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1AssociateDeviceWithPlacementCommandError(
      output,
      context
    );
  }
  const contents: AssociateDeviceWithPlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateDeviceWithPlacementResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AssociateDeviceWithPlacementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDeviceWithPlacementCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceConflictException":
    case "com.amazonaws.iot1click.projects#ResourceConflictException":
      response = await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreatePlacementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlacementCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreatePlacementCommandError(
      output,
      context
    );
  }
  const contents: CreatePlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePlacementResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreatePlacementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlacementCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceConflictException":
    case "com.amazonaws.iot1click.projects#ResourceConflictException":
      response = await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateProjectCommandError(output, context);
  }
  const contents: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProjectResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceConflictException":
    case "com.amazonaws.iot1click.projects#ResourceConflictException":
      response = await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeletePlacementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlacementCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeletePlacementCommandError(
      output,
      context
    );
  }
  const contents: DeletePlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePlacementResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeletePlacementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlacementCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.iot1click.projects#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteProjectCommandError(output, context);
  }
  const contents: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteProjectResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.iot1click.projects#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribePlacementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlacementCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribePlacementCommandError(
      output,
      context
    );
  }
  const contents: DescribePlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePlacementResponse",
    placement: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.placement !== undefined) {
    contents.placement = deserializeAws_restJson1_1PlacementDescription(
      data.placement,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribePlacementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlacementCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeProjectCommandError(
      output,
      context
    );
  }
  const contents: DescribeProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProjectResponse",
    project: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.project !== undefined) {
    contents.project = deserializeAws_restJson1_1ProjectDescription(
      data.project,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DisassociateDeviceFromPlacementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDeviceFromPlacementCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DisassociateDeviceFromPlacementCommandError(
      output,
      context
    );
  }
  const contents: DisassociateDeviceFromPlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateDeviceFromPlacementResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateDeviceFromPlacementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDeviceFromPlacementCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.iot1click.projects#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetDevicesInPlacementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicesInPlacementCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetDevicesInPlacementCommandError(
      output,
      context
    );
  }
  const contents: GetDevicesInPlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDevicesInPlacementResponse",
    devices: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.devices !== undefined) {
    contents.devices = deserializeAws_restJson1_1DeviceMap(
      data.devices,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDevicesInPlacementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicesInPlacementCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListPlacementsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlacementsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListPlacementsCommandError(
      output,
      context
    );
  }
  const contents: ListPlacementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPlacementsResponse",
    nextToken: undefined,
    placements: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  if (data.placements !== undefined) {
    contents.placements = deserializeAws_restJson1_1PlacementSummaryList(
      data.placements,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPlacementsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlacementsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListProjectsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListProjectsCommandError(output, context);
  }
  const contents: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProjectsResponse",
    nextToken: undefined,
    projects: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  if (data.projects !== undefined) {
    contents.projects = deserializeAws_restJson1_1ProjectSummaryList(
      data.projects,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListProjectsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdatePlacementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlacementCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdatePlacementCommandError(
      output,
      context
    );
  }
  const contents: UpdatePlacementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePlacementResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdatePlacementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlacementCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.iot1click.projects#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateProjectCommandError(output, context);
  }
  const contents: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateProjectResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot1click.projects#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot1click.projects#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot1click.projects#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.iot1click.projects#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.iot1click.projects#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    __type: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined
  };
  const data: any = output.body;
  if (data.code !== undefined) {
    contents.code = data.code;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined
  };
  const data: any = output.body;
  if (data.code !== undefined) {
    contents.code = data.code;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: ResourceConflictException = {
    __type: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined
  };
  const data: any = output.body;
  if (data.code !== undefined) {
    contents.code = data.code;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined
  };
  const data: any = output.body;
  if (data.code !== undefined) {
    contents.code = data.code;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    __type: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined
  };
  const data: any = output.body;
  if (data.code !== undefined) {
    contents.code = data.code;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1DefaultPlacementAttributeMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1DeviceCallbackOverrideMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1DeviceTemplate = (
  input: DeviceTemplate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.callbackOverrides !== undefined) {
    bodyParams[
      "callbackOverrides"
    ] = serializeAws_restJson1_1DeviceCallbackOverrideMap(
      input.callbackOverrides,
      context
    );
  }
  if (input.deviceType !== undefined) {
    bodyParams["deviceType"] = input.deviceType;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DeviceTemplateMap = (
  input: { [key: string]: DeviceTemplate },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_restJson1_1DeviceTemplate(
      input[key],
      context
    );
  });
  return mapParams;
};

const serializeAws_restJson1_1PlacementAttributeMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1PlacementTemplate = (
  input: PlacementTemplate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.defaultAttributes !== undefined) {
    bodyParams[
      "defaultAttributes"
    ] = serializeAws_restJson1_1DefaultPlacementAttributeMap(
      input.defaultAttributes,
      context
    );
  }
  if (input.deviceTemplates !== undefined) {
    bodyParams["deviceTemplates"] = serializeAws_restJson1_1DeviceTemplateMap(
      input.deviceTemplates,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1DefaultPlacementAttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DeviceCallbackOverrideMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DeviceMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DeviceTemplate = (
  output: any,
  context: __SerdeContext
): DeviceTemplate => {
  let contents: any = {
    __type: "DeviceTemplate",
    callbackOverrides: undefined,
    deviceType: undefined
  };
  if (output.callbackOverrides !== undefined) {
    contents.callbackOverrides = deserializeAws_restJson1_1DeviceCallbackOverrideMap(
      output.callbackOverrides,
      context
    );
  }
  if (output.deviceType !== undefined) {
    contents.deviceType = output.deviceType;
  }
  return contents;
};

const deserializeAws_restJson1_1DeviceTemplateMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: DeviceTemplate } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1DeviceTemplate(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_restJson1_1PlacementAttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1PlacementDescription = (
  output: any,
  context: __SerdeContext
): PlacementDescription => {
  let contents: any = {
    __type: "PlacementDescription",
    attributes: undefined,
    createdDate: undefined,
    placementName: undefined,
    projectName: undefined,
    updatedDate: undefined
  };
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_restJson1_1PlacementAttributeMap(
      output.attributes,
      context
    );
  }
  if (output.createdDate !== undefined) {
    contents.createdDate = new Date(
      output.createdDate % 1 != 0
        ? Math.round(output.createdDate * 1000)
        : output.createdDate
    );
  }
  if (output.placementName !== undefined) {
    contents.placementName = output.placementName;
  }
  if (output.projectName !== undefined) {
    contents.projectName = output.projectName;
  }
  if (output.updatedDate !== undefined) {
    contents.updatedDate = new Date(
      output.updatedDate % 1 != 0
        ? Math.round(output.updatedDate * 1000)
        : output.updatedDate
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PlacementSummary = (
  output: any,
  context: __SerdeContext
): PlacementSummary => {
  let contents: any = {
    __type: "PlacementSummary",
    createdDate: undefined,
    placementName: undefined,
    projectName: undefined,
    updatedDate: undefined
  };
  if (output.createdDate !== undefined) {
    contents.createdDate = new Date(
      output.createdDate % 1 != 0
        ? Math.round(output.createdDate * 1000)
        : output.createdDate
    );
  }
  if (output.placementName !== undefined) {
    contents.placementName = output.placementName;
  }
  if (output.projectName !== undefined) {
    contents.projectName = output.projectName;
  }
  if (output.updatedDate !== undefined) {
    contents.updatedDate = new Date(
      output.updatedDate % 1 != 0
        ? Math.round(output.updatedDate * 1000)
        : output.updatedDate
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PlacementSummaryList = (
  output: any,
  context: __SerdeContext
): Array<PlacementSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PlacementSummary(entry, context)
  );
};

const deserializeAws_restJson1_1PlacementTemplate = (
  output: any,
  context: __SerdeContext
): PlacementTemplate => {
  let contents: any = {
    __type: "PlacementTemplate",
    defaultAttributes: undefined,
    deviceTemplates: undefined
  };
  if (output.defaultAttributes !== undefined) {
    contents.defaultAttributes = deserializeAws_restJson1_1DefaultPlacementAttributeMap(
      output.defaultAttributes,
      context
    );
  }
  if (output.deviceTemplates !== undefined) {
    contents.deviceTemplates = deserializeAws_restJson1_1DeviceTemplateMap(
      output.deviceTemplates,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ProjectDescription = (
  output: any,
  context: __SerdeContext
): ProjectDescription => {
  let contents: any = {
    __type: "ProjectDescription",
    createdDate: undefined,
    description: undefined,
    placementTemplate: undefined,
    projectName: undefined,
    updatedDate: undefined
  };
  if (output.createdDate !== undefined) {
    contents.createdDate = new Date(
      output.createdDate % 1 != 0
        ? Math.round(output.createdDate * 1000)
        : output.createdDate
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.placementTemplate !== undefined) {
    contents.placementTemplate = deserializeAws_restJson1_1PlacementTemplate(
      output.placementTemplate,
      context
    );
  }
  if (output.projectName !== undefined) {
    contents.projectName = output.projectName;
  }
  if (output.updatedDate !== undefined) {
    contents.updatedDate = new Date(
      output.updatedDate % 1 != 0
        ? Math.round(output.updatedDate * 1000)
        : output.updatedDate
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ProjectSummary = (
  output: any,
  context: __SerdeContext
): ProjectSummary => {
  let contents: any = {
    __type: "ProjectSummary",
    createdDate: undefined,
    projectName: undefined,
    updatedDate: undefined
  };
  if (output.createdDate !== undefined) {
    contents.createdDate = new Date(
      output.createdDate % 1 != 0
        ? Math.round(output.createdDate * 1000)
        : output.createdDate
    );
  }
  if (output.projectName !== undefined) {
    contents.projectName = output.projectName;
  }
  if (output.updatedDate !== undefined) {
    contents.updatedDate = new Date(
      output.updatedDate % 1 != 0
        ? Math.round(output.updatedDate * 1000)
        : output.updatedDate
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ProjectSummaryList = (
  output: any,
  context: __SerdeContext
): Array<ProjectSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProjectSummary(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};