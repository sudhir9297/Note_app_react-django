from channels.routing import ProtocolTypeRouter,URLRouter
from channels.auth import AuthMiddlewareStack
import notes.routing


applictaion=ProtocolTypeRouter({

    'websocket':AuthMiddlewareStack(
        URLRouter(
            notes.routing.websocket_urlpatters
        )
    )
})